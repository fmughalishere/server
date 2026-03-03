import express from 'express';
import { applyToJob, getMyApplications, getEmployerApps } from '../controllers/applicationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/apply', protect, applyToJob);
router.get('/my-apps', protect, getMyApplications);
router.get('/employer-apps', protect, getEmployerApps);

export default router;