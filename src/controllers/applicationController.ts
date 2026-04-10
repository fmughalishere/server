import { Request, Response } from 'express';
import { Application } from '../models/Application.js';

export const applyToJob = async (req: any, res: Response) => {
  try {
    const userId = req.user._id;
    const newApp = new Application({ ...req.body, applicant: userId });
    await newApp.save();
    res.status(201).json({ success: true, message: "Applied successfully!" });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getJobSeekerStats = async (req: any, res: Response) => {
  try {
    const userId = req.user._id;
    const totalApplications = await Application.countDocuments({ applicant: userId });
    const shortlisted = await Application.countDocuments({ applicant: userId, status: 'shortlisted' });
    const recentApplications = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).limit(5);

    res.status(200).json({
      success: true,
      user: { name: req.user.name, email: req.user.email },
      totalApplications,
      shortlisted,
      savedJobs: 0,
      recentApplications
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};