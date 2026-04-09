import { Application } from '../models/Application.js';
export const applyToJob = async (req, res) => {
    const { jobId, coverLetter, resume } = req.body;
    const userId = req.user.id;
    try {
        const existingApp = await Application.findOne({ job: jobId, applicant: userId });
        if (existingApp) {
            return res.status(400).json({ message: "You have already applied for this job" });
        }
        const newApplication = new Application({
            job: jobId,
            applicant: userId,
            coverLetter,
            resume
        });
        await newApplication.save();
        res.status(201).json({ success: true, message: "Applied successfully!" });
    }
    catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};
export const getMyApplications = async (req, res) => {
    try {
        const applications = await Application.find({ applicant: req.user.id })
            .populate('job', 'title company location')
            .sort({ createdAt: -1 });
        res.status(200).json(applications);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching applications" });
    }
};
export const getJobApplicants = async (req, res) => {
    const { jobId } = req.params;
    try {
        const applicants = await Application.find({ job: jobId })
            .populate('applicant', 'name email profileImage')
            .sort({ createdAt: -1 });
        res.status(200).json(applicants);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching applicants" });
    }
};
export const updateApplicationStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const updatedApp = await Application.findByIdAndUpdate(id, { status }, { new: true });
        res.status(200).json({ message: `Status updated to ${status}`, updatedApp });
    }
    catch (error) {
        res.status(500).json({ message: "Update failed" });
    }
};
//# sourceMappingURL=applicationController.js.map