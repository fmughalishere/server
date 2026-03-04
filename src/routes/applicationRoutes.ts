import express from 'express';
import { 
    applyToJob, 
    getMyApplications, 
    getJobApplicants, 
    updateApplicationStatus 
} from '../controllers/applicationController.js';

import { getEmployerStats } from '../controllers/employerdashboardController.js'; 
import { protect, isEmployer, isJobSeeker } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/apply', protect, isJobSeeker, applyToJob);
router.get('/my-applications', protect, isJobSeeker, getMyApplications);
router.get('/job/:jobId', protect, isEmployer, getJobApplicants);
router.patch('/status/:id', protect, isEmployer, updateApplicationStatus);
router.get('/employer-stats', protect, isEmployer, getEmployerStats); 

export default router;