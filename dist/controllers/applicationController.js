import Job from '../models/Job.js';
import { Application } from '../models/Application.js';
export const getEmployerApplicants = async (req, res) => {
    try {
        const employerId = req.user.id;
        const myJobs = await Job.find({ postedBy: employerId }).select('_id');
        const jobIds = myJobs.map((job) => job._id);
        const applicants = await Application.find({ job: { $in: jobIds } })
            .populate('applicant', 'name email')
            .populate('job', 'title')
            .sort({ createdAt: -1 });
        res.status(200).json(applicants);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching applicants" });
    }
};
export const updateApplicationStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const application = await Application.findByIdAndUpdate(id, { status }, { new: true });
        res.status(200).json(application);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating status" });
    }
};
export const getJobseekerStats = async (req, res) => {
    try {
        const userId = req.user.id;
        const totalApplications = await Application.countDocuments({ applicant: userId });
        const shortlisted = await Application.countDocuments({ applicant: userId, status: 'shortlisted' });
        const recentApplications = await Application.find({ applicant: userId })
            .populate('job', 'title city')
            .sort({ createdAt: -1 })
            .limit(5);
        res.status(200).json({
            user: req.user,
            totalApplications,
            shortlisted,
            recentApplications
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching jobseeker stats" });
    }
};
export const getMyApplications = async (req, res) => {
    try {
        const userId = req.user.id;
        const applications = await Application.find({ applicant: userId })
            .populate({
            path: 'job',
            select: 'title company city salary type'
        })
            .sort({ createdAt: -1 });
        res.status(200).json(applications);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching your applications" });
    }
};
export const createApplication = async (req, res) => {
    try {
        const { jobId, fullName, dob, gender, city, email, phone, whatsapp, category, jobtype, education, isFresher, experienceData, achievements, image, emailPrivacy, phonePrivacy, whatsappPrivacy } = req.body;
        const jobDetails = await Job.findById(jobId);
        if (!jobDetails) {
            return res.status(404).json({ message: "Job not found" });
        }
        const newApplication = new Application({
            applicant: req.user.id,
            employer: jobDetails.postedBy,
            job: jobId,
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
            experience: isFresher ? [] : experienceData,
            achievements,
            image,
            status: 'pending'
        });
        await newApplication.save();
        res.status(201).json({ message: "Application submitted successfully", data: newApplication });
    }
    catch (error) {
        console.error("Create App Error:", error);
        res.status(500).json({ message: error.message });
    }
};
//# sourceMappingURL=applicationController.js.map