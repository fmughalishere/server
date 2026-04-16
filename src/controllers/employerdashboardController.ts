import { Request, Response } from 'express';
import Job from '../models/Job.js';
import { Application } from '../models/Application.js';

export const getEmployerStats = async (req: any, res: Response) => {
    try {
        const employerId = req.user.id;
        const totalJobs = await Job.countDocuments({
            postedBy: employerId
        });
        const activeJobs = await Job.countDocuments({
            postedBy: employerId,
            status: 'active'
        });
        const employerJobs = await Job.find({
            postedBy: employerId
        }).select('_id');

        const jobIds = employerJobs.map(job => job._id);
        const totalApplicants = await Application.countDocuments({
            job: { $in: jobIds }
        });
        const shortlisted = await Application.countDocuments({
            job: { $in: jobIds },
            status: 'shortlisted'
        });
        const recentApplicants = await Application.find({
            job: { $in: jobIds }
        })
            .populate('applicant', 'name email')
            .populate('job', 'title')
            .sort({ createdAt: -1 })
            .limit(5);

        return res.status(200).json({
            user: req.user,
            totalJobsPosted: totalJobs,
            activeJobs,
            totalApplicants,
            shortlisted,
            recentApplicants
        });

    } catch (error) {
        console.error("Employer Stats Error:", error);
        return res.status(500).json({
            message: "Error fetching stats",
            error
        });
    }
};