import { Request, Response } from 'express';
import  Job  from '../models/Job.js';
import {Application} from '../models/Application.js';

export const getEmployerStats = async (req: any, res: Response) => {
    const employerId = req.user.id;
    try {
        const totalJobs = await Job.countDocuments({ postedBy: employerId });
        const activeJobs = await Job.countDocuments({ postedBy: employerId, status: 'active' });
        
        const employerJobs = await Job.find({ postedBy: employerId }).select('_id');
        const jobIds = employerJobs.map(j => j._id);
        
        const totalApplicants = await Application.countDocuments({ job: { $in: jobIds } });
                const shortlisted = await Application.countDocuments({ 
            job: { $in: jobIds }, 
            status: 'shortlisted' 
        });

        const recentApplicants = await Application.find({ job: { $in: jobIds } })
            .populate('user', 'name email')
            .populate('job', 'title')
            .sort({ createdAt: -1 })
            .limit(5);

        return res.status(200).json({
            user: req.user,
            totalJobsPosted: totalJobs,
            activeJobs: activeJobs,
            totalApplicants: totalApplicants,
            shortlisted: shortlisted,
            recentApplicants: recentApplicants
        });
    } catch (error) {
        return res.status(500).json({ message: "Error fetching stats", error });
    }
};