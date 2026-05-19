import { Request, Response } from 'express';
import Job from '../models/Job.js';
import { Application } from '../models/Application.js';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

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

export const createSubAdmin = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new User({
            name,
            email,
            password: hashedPassword,
            role: 'subAdmin',
            isApproved: true,
            isVerified: true
        });

        await newAdmin.save();
        res.status(201).json({ message: "Sub-Admin created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating sub-admin" });
    }
};

export const getAllAdmins = async (req: Request, res: Response) => {
    try {
        const admins = await User.find({ role: 'subAdmin' }).select('-password');
        res.json(admins);
    } catch (error) {
        res.status(500).json({ message: "Error fetching admins" });
    }
};

export const updateSubAdmin = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        
        const updateData: any = { name, email };
        if (password) {
            updateData.password = await bcrypt.hash(password, 10);
        }

        const updatedAdmin = await User.findByIdAndUpdate(id, updateData, { new: true }).select('-password');
        res.json({ message: "Admin updated successfully", updatedAdmin });
    } catch (error) {
        res.status(500).json({ message: "Update failed" });
    }
};

export const deleteAdmin = async (req: Request, res: Response) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "Admin deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Delete failed" });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await User.find({ role: { $ne: 'cheifAdmin' } }).select('-password');
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

export const getGraphStats = async (req: Request, res: Response) => {
    try {
        const graphData = await User.aggregate([
            { $group: { _id: { month: { $month: "$createdAt" }, role: "$role" }, count: { $sum: 1 } } },
            { $sort: { "_id.month": 1 } }
        ]);
        const monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const formattedData = monthNames.slice(1).map((month, index) => {
            const monthNum = index + 1;
            const applicants = graphData.find(d => d._id.month === monthNum && d._id.role === 'user')?.count || 0;
            const employers = graphData.find(d => d._id.month === monthNum && d._id.role === 'employer')?.count || 0;
            return { month, applicants, employers };
        });
        res.json(formattedData);
    } catch (error) { res.status(500).json({ message: "Graph error" }); }
};

export const getActiveVisitors = async (req: Request, res: Response) => {
    try {
        const recentUsers = await User.find().select('name role location city createdAt').sort({ createdAt: -1 }).limit(6);
        res.json(recentUsers);
    } catch (error) { res.status(500).json({ message: "Visitor error" }); }
};