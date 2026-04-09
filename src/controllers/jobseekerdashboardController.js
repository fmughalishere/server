import { Application } from '../models/Application.js';
import User from '../models/User.js';
export const getJobSeekerStats = async (req, res) => {
    const userId = req.user.id;
    try {
        const totalApps = await Application.countDocuments({ applicant: userId });
        const shortlisted = await Application.countDocuments({ applicant: userId, status: 'shortlisted' });
        const foundUser = await User.findById(userId);
        const savedJobsCount = foundUser?.savedJobs?.length || 0;
        const recentApps = await Application.find({ applicant: userId })
            .populate('job')
            .limit(5);
        return res.status(200).json({
            totalApplications: totalApps,
            shortlisted: shortlisted,
            savedJobs: savedJobsCount,
            recentApplications: recentApps
        });
    }
    catch (error) {
        return res.status(500).json({ message: "Error", error });
    }
};
//# sourceMappingURL=jobseekerdashboardController.js.map