import { Request, Response } from 'express';
import User from '../models/User.js';

export const getUserProfile = async (req: any, res: Response) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserProfile = async (req: any, res: Response) => {
  try {
    const { name, bio, city, resume, skills, phone } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });
    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (!user.profile) {
      user.profile = {
        skills: [],
        city: null,
        resume: null,
        bio: null,
        experience: null
      };
    }

    if (bio !== undefined) user.profile!.bio = bio;
    if (city !== undefined) user.profile!.city = city;
    if (resume !== undefined) user.profile!.resume = resume;
    
    if (skills !== undefined) {
      const skillsArray = Array.isArray(skills) 
        ? skills 
        : skills.split(',').map((s: string) => s.trim());
      user.profile!.skills = skillsArray;
    }

    await user.save();
    
    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};