import { Request, Response } from 'express';
import Job from '../models/Job.js';
import { Application } from '../models/Application.js';
import User from '../models/User.js';

export const getAllStats = async (req: Request, res: Response) => {
    try {
        const totalJobs = await Job.countDocuments();
        const totalApps = await Application.countDocuments();
        const totalUsers = await User.countDocuments();
        res.json({ totalJobs, totalApps, totalUsers});
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await User.find().select('-password');
    res.json(users);
};

export const toggleEmployerStatus = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;
    await User.findByIdAndUpdate(id, { isApproved: status });
    res.json({ message: `Employer ${status ? 'approved' : 'rejected'}` });
};

export const deleteUser = async (req: Request, res: Response) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
};

export const getAllJobs = async (req: Request, res: Response) => {
    const jobs = await Job.find().populate('employerId', 'name email');
    res.json(jobs);
};

export const deleteJob = async (req: Request, res: Response) => {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted" });
};

export const getAllApplications = async (req: Request, res: Response) => {
    const apps = await Application.find()
        .populate('jobId')
        .populate('userId', 'name email');
    res.json(apps);
};

export const updateApplicationStatus = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;
    await Application.findByIdAndUpdate(id, { status });
    res.json({ message: "Application status updated" });
};
