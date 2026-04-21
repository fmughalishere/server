import { Request, Response } from 'express';
import Job from '../models/Job.js';
import User from '../models/User.js';

export const getJobById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id).populate('postedBy', 'name companyName email');
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    
    res.status(200).json(job);
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching job details', error: error.message });
  }
};

export const postJob = async (req: any, res: Response) => {
  try {
    const { title, description, city, salary, type, category, skills, experience } = req.body;
    const jobData = {
      title,
      description,
      city,
      salary,
      type,
      category,
      skills,
      experience,
      postedBy: req.user.id,
      company: req.user.companyName || "Company Name" 
    };

    const job = await Job.create(jobData);
    
    res.status(201).json({
      success: true,
      message: "Job posted successfully",
      job
    });
  } catch (error: any) {
    res.status(500).json({ message: 'Error posting job', error: error.message });
  }
};

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const { city, title, category, type } = req.query;
    let query: any = {};
    if (city) query.city = new RegExp(city as string, 'i');
    if (title) query.title = new RegExp(title as string, 'i');
    if (category) query.category = category;
    if (type) query.type = type;

    const jobs = await Job.find(query)
      .populate('postedBy', 'name companyName')
      .sort({ createdAt: -1 });
      
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs' });
  }
};

export const getMyJobs = async (req: any, res: Response) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "User not authenticated" });
    }
    const jobs = await Job.find({ postedBy: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error: any) {
    res.status(500).json({ message: "Error fetching your jobs", error: error.message });
  }
};

export const toggleSaveJob = async (req: any, res: Response) => {
    try {
        const { jobId } = req.params;
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        if (user.savedJobs.includes(jobId)) {
            user.savedJobs = user.savedJobs.filter(id => id.toString() !== jobId);
            await user.save();
            return res.json({ message: "Job removed from saved list", saved: false });
        } else {
            user.savedJobs.push(jobId);
            await user.save();
            return res.json({ message: "Job saved successfully", saved: true });
        }
    } catch (error) {
        res.status(500).json({ message: "Error saving job" });
    }
};

export const getSavedJobs = async (req: any, res: Response) => {
    try {
        const user = await User.findById(req.user.id).populate('savedJobs');
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user.savedJobs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching saved jobs" });
    }
};