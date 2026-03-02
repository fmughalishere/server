import { Request, Response } from 'express';
import Job from '../models/Job.js';

export const postJob = async (req: any, res: Response) => {
  try {
    const job = await Job.create({ ...req.body, employer: req.user.id });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error posting job' });
  }
};

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const { city, title } = req.query;
    let query: any = {};
    if (city) query.city = new RegExp(city as string, 'i');
    if (title) query.title = new RegExp(title as string, 'i');

    const jobs = await Job.find(query).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs' });
  }
};