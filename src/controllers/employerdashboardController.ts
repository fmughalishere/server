import { Request, Response } from 'express';
import  Job  from '../models/Job.js';
import {Application} from '../models/Application.js';

export const getEmployerStats = async (req: any, res: Response) => {
    const employerId = req.user.id;
    try {
        const totalJobs = await Job.countDocuments({ postedBy: employerId });
        const activeJobs = await Job.countDocuments({ postedBy: employerId, status: 'active' });
        
        const employerJobs = await Job.find({ postedBy: employerId });
        const jobIds = employerJobs.map((j: any) => j._id);
        
        const totalApplicants = await Application.countDocuments({ job: { $in: jobIds } });
        return res.status(200).json({
            totalJobsPosted: totalJobs,
            activeJobs: activeJobs,
            totalApplicants: totalApplicants
        });
    } catch (error) {
        return res.status(500).json({ message: "Error fetching stats", error });
    }
};