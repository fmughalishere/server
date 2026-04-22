import { Application } from '../models/Application.js';
export const getEmployerApplicants = async (req, res) => {
    try {
        const applicants = await Application.find({})
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
        const application = await Application.findByIdAndUpdate(id, { status }, { new: true })
            .populate('employer', 'name email phone');
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
            .populate('employer', 'name email phone')
            .sort({ createdAt: -1 })
            .limit(10);
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
            .populate('employer', 'name email phone')
            .sort({ createdAt: -1 });
        res.status(200).json(applications);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching your applications" });
    }
};
export const createApplication = async (req, res) => {
    try {
        const { fullName, dob, gender, city, image, jobtype, category, education, isFresher, experience, achievements } = req.body;
        const application = new Application({
            applicant: req.user._id,
            fullName,
            dob,
            gender,
            city,
            image,
            jobtype,
            category,
            education,
            isFresher,
            experience,
            achievements
        });
        const createdApplication = await application.save();
        res.status(201).json(createdApplication);
    }
    catch (error) {
        res.status(400).json({ message: error.message || "Failed to create application" });
    }
};
export const getSingleApplication = async (req, res) => {
    try {
        const app = await Application.findById(req.params.id)
            .populate("applicant", "name email")
            .populate("employer", "name email phone");
        if (!app)
            return res.status(404).json({ message: "Not found" });
        res.json(app);
    }
    catch (err) {
        res.status(500).json({ message: "Error fetching application" });
    }
};
//# sourceMappingURL=applicationController.js.map