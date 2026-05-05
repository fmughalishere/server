import { Request, Response } from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
    if (companyExists) {
        return res.status(400).json({ message: 'Company with this email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
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
      logo
    });

    res.status(201).json({ 
      message: 'Company registered successfully',
      companyId: company._id 
    });

  } catch (error) {
    console.error("Company Register Error:", error);
    res.status(500).json({ message: 'Server Error during company registration' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid Credentials' });
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
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user.savedJobs);
    } catch (error) {
        console.error("Fetch Saved Jobs Error:", error);
        res.status(500).json({ message: "Error fetching saved jobs" });
    }
};