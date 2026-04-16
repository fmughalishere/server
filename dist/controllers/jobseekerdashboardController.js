import { Application } from '../models/Application.js';
import User from '../models/User.js';
export const getJobSeekerStats = async (req, res) => {
    try {
        const userId = req.user._id;
        const [totalApplications, shortlisted, foundUser, recentApplications] = await Promise.all([
            Application.countDocuments({ applicant: userId }),
            Application.countDocuments({ applicant: userId, status: 'shortlisted' }),
            User.findById(userId).select('name email'),
            Application.find({ applicant: userId }).sort({ createdAt: -1 }).limit(5)
        ]);
        res.status(200).json({
            success: true,
            user: { name: foundUser?.name || "Candidate" },
            totalApplications,
            shortlisted,
            savedJobs: 0,
            recentApplications
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
//# sourceMappingURL=jobseekerdashboardController.js.map