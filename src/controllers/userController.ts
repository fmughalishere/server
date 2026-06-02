import { Request, Response } from 'express';
import User from '../models/User.js';

export const getUserProfile = async (req: any, res: Response) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUserProfile = async (req: any, res: Response) => {
    try {
        const { name, phone, email, companySize, logo, contactPerson, designation, avatar, resume, city, website, description } = req.body;
        const user = await User.findById(req.user.id);

        if (!user) return res.status(404).json({ message: "User not found" });
        if (user.role === 'user') {
            if (name) user.name = name;
            if (avatar) user.avatar = avatar;
            if (!user.profile) {
                user.profile = { skills: [], city: null, resume: null, bio: null, experience: null };
            }
            if (resume) user.profile.resume = resume;
            if (city) user.profile.city = city;
        }
        if (user.role === 'employer') {
            if (name) user.name = name;
            if (phone) user.phone = phone;
            if (website) user.website = website;
            if (city) user.city = city;
            if (companySize) user.companySize = companySize;
            if (logo) user.logo = logo;
            if (contactPerson) user.contactPerson = contactPerson;
            if (description) user.designation = designation;
            if (description) user.description = description;
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