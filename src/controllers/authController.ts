import { Request, Response } from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Resend } from 'resend'; 
import crypto from 'crypto';
const resend = new Resend(process.env.RESEND_API_KEY);

export const register = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString('hex');

    await User.create({ 
      name, email, password: hashedPassword, 
      role: role || 'jobseeker',
      verificationToken, isVerified: false 
    });

    const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`;

    try {
        console.log("Attempting to send email via Resend to:", email);
        const { data, error } = await resend.emails.send({
          from: 'EasyJobsPK <onboarding@resend.dev>',
          to: email,
          subject: 'Verify Your Account - EasyJobsPK',
          html: `<p>Hello ${name}, click here: <a href="${verificationLink}">${verificationLink}</a></p>`,
        });

        if (error) {
            console.error("Resend API Error Detail:", error);
            return res.status(201).json({ message: 'Account created, but email failed: ' + error.message });
        }

        console.log("Resend API Success:", data);
        return res.status(201).json({ message: 'Account created! Verification link sent.' });

    } catch (mailError: any) {
        console.error("Resend Catch Error:", mailError.message);
        return res.status(201).json({ message: 'Account created but Email failed. Check backend logs.' });
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

export const companyRegister = async (req: Request, res: Response) => {
  const { companyName, email, password, phone, website, city, industry, companySize, description, contactPerson, designation, logo, lat, lng, location } = req.body;
  try {
    const companyExists = await User.findOne({ email });
    if (companyExists) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString('hex');
    
    await User.create({
      name: companyName, email, password: hashedPassword, role: 'employer',
      phone, website, lat, lng, location, city, industry, companySize, 
      description, contactPerson, designation, logo, verificationToken, isVerified: false
    });

    const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`;

    try {
        await resend.emails.send({
          from: 'EasyJobsPK <onboarding@resend.dev>',
          to: email,
          subject: 'Verify Your Company Account',
          html: `<p>Hello ${companyName}, verify here: <a href="${verificationLink}">Verify Email</a></p>`,
        });
        res.status(201).json({ message: 'Company registered! Check email to verify.' });
    } catch (err: any) {
        res.status(201).json({ message: 'Company registered but email failed.' });
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

export const verifyEmail = async (req: Request, res: Response) => {
    const token = req.query.token as string;
    try {
      const user = await User.findOne({ verificationToken: token });
      if (!user) return res.status(400).json({ message: 'Invalid or expired token' });
      user.isVerified = true;
      user.verificationToken = null;
      await (user as any).save();
      res.status(200).json({ message: 'Email verified successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Verification error' });
    }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid Credentials' });
    if (!user.isVerified) return res.status(401).json({ message: 'Please verify email first.' });

    const isMatch = await bcrypt.compare(password, user.password as string);
    if (!isMatch) return res.status(400).json({ message: 'Invalid Credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1d' });
    res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getSavedJobs = async (req: any, res: Response) => {
    try {
        const user = await User.findById(req.user.id).populate('savedJobs');
        res.status(200).json(user ? user.savedJobs : []);
    } catch (error) {
        res.status(500).json({ message: "Error fetching saved jobs" });
    }
};