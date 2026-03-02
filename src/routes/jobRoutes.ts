import express from 'express';
import { postJob, getAllJobs } from '../controllers/jobController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', getAllJobs);
router.post('/', protect, postJob);

export default router;