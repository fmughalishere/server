import express from 'express';
const router = express.Router();
import { createApplication, getMyApplications, getJobseekerStats } from '../controllers/applicationController.js';
import { getEmployerApplicants, updateApplicationStatus } from '../controllers/applicationController.js';
import { protect } from '../middleware/authMiddleware.js';
router.post('/', protect, createApplication);
router.get('/employer/all-applicants', protect, getEmployerApplicants);
router.put('/status/:id', protect, updateApplicationStatus);
router.get('/jobseeker-stats', protect, getJobseekerStats);
router.get('/my-applications', protect, getMyApplications);
export default router;
//# sourceMappingURL=applicationRoutes.js.map