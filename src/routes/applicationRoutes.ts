import express from 'express';
import { applyToJob } from '../controllers/applicationController.js';
import { getJobSeekerStats } from '../controllers/jobseekerdashboardController.js'; 
import { authMiddleware, isJobSeeker } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/apply', authMiddleware, isJobSeeker, applyToJob);
router.get('/jobseeker-stats', authMiddleware, isJobSeeker, getJobSeekerStats);

export default router;