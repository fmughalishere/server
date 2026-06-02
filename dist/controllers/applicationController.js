import { Application } from '../models/Application.js';
import nodemailer from 'nodemailer';
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
            .populate({
            path: 'job',
            select: 'title companyName companyLogo location salary type'
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
        const { fullName, dob, gender, city, image, jobtype, category, education, isFresher, experience, achievements, email, phone, whatsapp, salaryDemand } = req.body;
        const createdApplication = await Application.create({
            applicant: req.user._id,
            fullName,
            dob,
            email,
            phone,
            whatsapp,
            gender,
            city,
            image,
            jobtype,
            category,
            education,
            isFresher,
            experience,
            salaryDemand,
            achievements
        });
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
export const sendJobOffer = async (req, res) => {
    try {
        const { id } = req.params;
        const offerData = req.body;
        const employerId = req.user.id;
        const application = await Application.findById(id);
        if (!application)
            return res.status(404).json({ message: "Application not found" });
        application.status = "Offered";
        application.offerDetails = {
            ...offerData,
            offeredAt: new Date(),
            employerId: employerId
        };
        await application.save();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        const mailOptions = {
            from: `"Easy Jobs PK" <${process.env.EMAIL_USER}>`,
            to: application.email,
            subject: `Job Offer: ${offerData.designation} at ${offerData.companyName}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 2px solid #5DBB63; border-radius: 20px;">
          <h2 style="color: #00004d; text-align: center;">Congratulations! 🎉</h2>
          <p>Dear <b>${application.fullName}</b>,</p>
          <p>You have received a job offer from <b>${offerData.companyName}</b> for <b>${offerData.designation}</b>.</p>
          
          <div style="background: #f4f7f9; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <p><b>Company:</b> ${offerData.companyName}</p>
            <p><b>City:</b> ${offerData.cityName}</p>
            <p><b>Contact Person:</b> ${offerData.employerName}</p>
            <p><b>WhatsApp:</b> ${offerData.whatsapp}</p>
          </div>

          <p><b>Employer Message:</b> ${offerData.message}</p>
          
          <div style="text-align: center; margin-top: 25px;">
            <a href="https://easyjobspk.onrender.com/dashboard/jobseeker" style="background: #00004d; color: white; padding: 10px 25px; text-decoration: none; border-radius: 10px; font-weight: bold;">Login to Dashboard</a>
          </div>
        </div>
      `
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Offer sent successfully!" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};
export const deleteApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const ApplicationModel = Application;
        const deletedApp = await ApplicationModel.findByIdAndDelete(id);
        if (!deletedApp) {
            return res.status(404).json({ message: "Application not found" });
        }
        res.status(200).json({ message: "Application deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting application" });
    }
};
export const toggleSaveApplicant = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id || req.user.id;
        const application = await Application.findById(id);
        if (!application)
            return res.status(404).json({ message: "Applicant not found" });
        if (!application.savedBy)
            application.savedBy = [];
        const isSaved = application.savedBy.includes(userId);
        if (isSaved) {
            application.savedBy = application.savedBy.filter((uid) => uid.toString() !== userId.toString());
        }
        else {
            application.savedBy.push(userId);
        }
        await application.save();
        res.status(200).json({
            message: isSaved ? "Removed from saved" : "Saved successfully",
            isSaved: !isSaved,
            savedBy: application.savedBy
        });
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};
//# sourceMappingURL=applicationController.js.map