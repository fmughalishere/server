import express from 'express';
import { getEmployerStats } from '../controllers/employerdashboardController.js';
import { getJobSeekerStats } from '../controllers/jobseekerdashboardController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router = express.Router();
router.get('/employer-stats', authMiddleware, getEmployerStats);
router.get('/jobseeker-stats', authMiddleware, getJobSeekerStats);
export default router;
//# sourceMappingURL=dashboardRoutes.js.map