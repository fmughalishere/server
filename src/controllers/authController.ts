import { Request, Response } from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  pool: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log("Nodemailer Configuration Error: ", error.message);
  } else {
    console.log("Email Server is Ready and Verified!");
  }
});

export const register = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const user = await User.create({ 
      name, 
      email, 
      password: hashedPassword, 
      role: role || 'jobseeker',
      verificationToken,
      isVerified: false 
    });

    const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`;
    
    const mailOptions = {
      from: `"EasyJobsPK" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify Your Account - EasyJobsPK",
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>Welcome to EasyJobsPK!</h2>
          <p>Hello ${name}, please verify your email address to activate your account.</p>
          <a href="${verificationLink}" style="background: #00004d; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block;">Verify Email Address</a>
          <p style="margin-top: 20px; font-size: 12px; color: #777;">If the button doesn't work, copy-paste this link: <br/> ${verificationLink}</p>
        </div>
      `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Verification Email sent successfully to:", email);
        return res.status(201).json({ 
            message: 'Account created successfully! Verification email sent.' 
        });
    } catch (mailError: any) {
        console.error("Mail Sending Failed:", mailError.message);
        return res.status(201).json({ 
            message: 'Account created, but we failed to send the email. Please contact support.' 
        });
    }

  } catch (error: any) {
    console.error("Register Error:", error);
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

export const companyRegister = async (req: Request, res: Response) => {
  const { 
    companyName, email, password, phone, website, city,
    lat, lng, location, industry, companySize, description, 
    contactPerson, designation, logo 
  } = req.body;

  try {
    const companyExists = await User.findOne({ email });
    if (companyExists) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString('hex');  
    
    await User.create({
      name: companyName, email, password: hashedPassword,
      role: 'employer', phone, website, lat, lng, location, city,
      industry, companySize, description, contactPerson, designation,
      logo, verificationToken, isVerified: false
    });

    const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`;
    const mailOptions = {
      from: `"EasyJobsPK" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify Your Company Account - EasyJobsPK",
      html: `<h3>Hello ${companyName},</h3><p>Verify your company account here: <a href="${verificationLink}">Verify Account</a></p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(201).json({ 
          message: 'Company registered! Please check your email to verify.' 
        });
    } catch (mailError: any) {
        console.error("Company Mail Error:", mailError.message);
        res.status(201).json({ 
            message: 'Company registered but verification email failed.' 
        });
    }

  } catch (error: any) {
    console.error("Company Register Error:", error);
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

    res.status(200).json({ message: 'Email verified successfully! You can now login.' });
  } catch (error) {
    res.status(500).json({ message: 'Verification error' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid Credentials' });
    if (!user.isVerified) return res.status(401).json({ message: 'Please verify your email first.' });

    const isMatch = await bcrypt.compare(password, user.password as string);
    if (!isMatch) return res.status(400).json({ message: 'Invalid Credentials' });

    const token = jwt.sign(
      { id: user._id, role: user.role }, 
      process.env.JWT_SECRET as string, 
      { expiresIn: '1d' }
    );

    res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getSavedJobs = async (req: any, res: Response) => {
    try {
        const user = await User.findById(req.user.id).populate('savedJobs');
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user.savedJobs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching saved jobs" });
    }
};