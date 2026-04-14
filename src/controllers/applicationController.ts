import { Request, Response } from 'express';
import Job from '../models/Job.js';
import { Application } from '../models/Application.js';

export const getEmployerApplicants = async (req: any, res: Response) => {
    try {
        const employerId = req.user.id;
        const myJobs = await Job.find({ postedBy: employerId }).select('_id');
        const jobIds = myJobs.map((job: any) => job._id);
        const applicants = await Application.find({ job: { $in: jobIds } })
            .populate('user', 'name email') 
            .populate('job', 'title')      
            .sort({ createdAt: -1 });

        res.status(200).json(applicants);
    } catch (error) {
        res.status(500).json({ message: "Error fetching applicants" });
    }
};

export const updateApplicationStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const application = await Application.findByIdAndUpdate(id, { status }, { new: true });
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({ message: "Error updating status" });
    }
};

export const getJobseekerStats = async (req: any, res: Response) => {
    try {
        const userId = req.user.id;
        const totalApplications = await Application.countDocuments({ user: userId });
        const shortlisted = await Application.countDocuments({ user: userId, status: 'shortlisted' });
        const recentApplications = await Application.find({ user: userId })
            .populate('job', 'title city')
            .sort({ createdAt: -1 })
            .limit(5);

        res.status(200).json({
            user: req.user,
            totalApplications,
            shortlisted,
            recentApplications
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching jobseeker stats" });
    }
};

export const getMyApplications = async (req: any, res: Response) => {
    try {
        const userId = req.user.id;

        const applications = await Application.find({ user: userId })
            .populate({
                path: 'job',
                select: 'title company city salary type'
            })
            .sort({ createdAt: -1 });

        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: "Error fetching your applications" });
    }
};

export const createApplication = async (req: any, res: any) => {
  try {
    const { 
      fullName, dob, gender, city, email, phone, whatsapp, 
      category, jobtype, education, isFresher, experienceData, 
      achievements, image, emailPrivacy, phonePrivacy, whatsappPrivacy 
    } = req.body;

    const newApplication = new Application({
      applicant: req.user._id, // Logged in user ki ID
      fullName,
      dob,
      gender,
      city,
      email,
      emailPrivacy,
      phone,
      phonePrivacy,
      whatsapp,
      whatsappPrivacy,
      category,
      jobtype,
      education,
      isFresher,
      experience: isFresher ? [] : experienceData, // Map experience data
      achievements,
      image,
      status: 'pending'
    });

    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully", data: newApplication });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};