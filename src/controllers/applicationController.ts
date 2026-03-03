import type { Request, Response } from 'express';
import Application from '../models/Application.js';

export const applyToJob = async (req: any, res: Response) => {
  try {
    const { jobId, resume, coverLetter } = req.body;
    const application = await Application.create({
      job: jobId,
      applicant: req.user.id,
      resume,
      coverLetter
    });
    res.status(201).json({ message: "Applied successfully!", application });
  } catch (error) {
    res.status(500).json({ message: "Error applying to job" });
  }
};

export const getMyApplications = async (req: any, res: Response) => {
  try {
    const apps = await Application.find({ applicant: req.user.id })
      .populate('job')
      .sort({ createdAt: -1 });
    res.json(apps);
  } catch (error) {
    res.status(500).json({ message: "Error fetching applications" });
  }
};

export const getEmployerApps = async (req: any, res: Response) => {
  try {
    const apps = await Application.find()
      .populate({
        path: 'job',
        match: { employer: req.user.id }
      })
      .populate('applicant', 'name email');

    const filteredApps = apps.filter(app => app.job !== null);
    res.json(filteredApps);
  } catch (error) {
    res.status(500).json({ message: "Error fetching employer apps" });
  }
};