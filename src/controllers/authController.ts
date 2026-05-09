import { Request, Response } from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

export const register = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ 
      name, 
      email, 
      password: hashedPassword, 
      role: role || 'jobseeker' 
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const companyRegister = async (req: Request, res: Response) => {
  const { 
    companyName, 
    email, 
    password, 
    phone, 
    website, 
    location, 
    industry, 
    companySize, 
    description, 
    contactPerson, 
    designation,
    logo 
  } = req.body;

  try {
    const companyExists = await User.findOne({ email });
    if (companyExists) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const company = await User.create({
      name: companyName,
      email,
      password: hashedPassword,
      role: 'employer',
      phone,
      website,
      location,
      industry,
      companySize,
      description,
      contactPerson,
      designation,
      logo,
      verificationToken,
      isVerified: false
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`;
    const mailOptions = {
      from: `"EasyJobsPK" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify Your Company Account - EasyJobsPK",
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #00004d;">Welcome to EasyJobsPK!</h2>
          <p>Hello ${companyName},</p>
          <p>Please click the button below to verify your business account and start hiring.</p>
          <a href="${verificationLink}" style="background: #00004d; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block;">Verify Email Address</a>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ 
      message: 'Company registered! Please check your email to verify account.' 
    });

  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: 'Server Error during registration' });
  }
};

export const verifyEmail = async (req: Request, res: Response) => {
  const token = req.query.token as string;

  try {
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }
    user.isVerified = true;
    user.verificationToken = null;
    await (user as any).save();

    res.status(200).json({ message: 'Email verified successfully! You can now login.' });
  } catch (error) {
    console.error("Verification Error:", error);
    res.status(500).json({ message: 'Verification error' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid Credentials' });
    if (user.role === 'employer' && !user.isVerified) {
      return res.status(401).json({ message: 'Please verify your email before logging in.' });
    }

    if (!user.password) {
      return res.status(400).json({ 
        message: 'This account was created via Google. Please use Google Login.' 
      });
    }

    const isMatch = await bcrypt.compare(password, user.password as string);
    if (!isMatch) return res.status(400).json({ message: 'Invalid Credentials' });

    const token = jwt.sign(
      { id: user._id, role: user.role }, 
      process.env.JWT_SECRET as string, 
      { expiresIn: '1d' }
    );

    res.json({ 
      token, 
      user: { id: user._id, name: user.name, role: user.role } 
    });

  } catch (error) {
    console.error("Login Error:", error);
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