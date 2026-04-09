import express from 'express';
import { 
    applyToJob, 
    getMyApplications, 
    getJobApplicants, 
    updateApplicationStatus 
} from '../controllers/applicationController.js';

import { getEmployerStats } from '../controllers/employerdashboardController.js'; 
import { authMiddleware, isEmployer, isJobSeeker } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/apply', authMiddleware, isJobSeeker, applyToJob);
router.get('/my-applications', authMiddleware, isJobSeeker, getMyApplications);
router.get('/job/:jobId', authMiddleware, isEmployer, getJobApplicants);
router.patch('/status/:id', authMiddleware, isEmployer, updateApplicationStatus);
router.get('/employer-stats', authMiddleware, isEmployer, getEmployerStats); 

export default router;