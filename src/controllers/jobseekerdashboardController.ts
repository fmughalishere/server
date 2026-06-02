import { Request, Response } from 'express';
import { Application } from '../models/Application.js';
import User from '../models/User.js';

export const getJobSeekerStats = async (req: any, res: Response) => {
  try {
    const userId = req.user._id;

    const [totalApplications, shortlisted, offered, foundUser, recentApplications] = await Promise.all([
      Application.countDocuments({ applicant: userId } as any),
      Application.countDocuments({ applicant: userId, status: 'shortlisted' } as any),
      Application.countDocuments({ applicant: userId, status: 'Offered' } as any),
      User.findById(userId).select('name email savedJobs'),
      Application.find({ applicant: userId } as any)
        .populate('job', 'title companyName location')
        .sort({ createdAt: -1 })
        .limit(5)
    ]);

    res.status(200).json({
      success: true,
      user: { 
        name: foundUser?.name || "Candidate",
        email: foundUser?.email 
      },
      stats: {
        totalApplications,
        shortlisted,
        offered,
        savedJobs: foundUser?.savedJobs?.length || 0
      },
      recentApplications
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};