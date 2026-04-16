import express from 'express';
import { postJob, getAllJobs, getMyJobs } from '../controllers/jobController.js';
import { authMiddleware, protect } from '../middleware/authMiddleware.js';
import { getSavedJobs, toggleSaveJob } from '../controllers/jobController.js';
const router = express.Router();
router.get('/', getAllJobs);
router.post('/', authMiddleware, postJob);
router.get('/my-jobs', protect, getMyJobs);
router.get('/saved-jobs', protect, getSavedJobs);
router.post('/save/:jobId', protect, toggleSaveJob);
export default router;
//# sourceMappingURL=jobRoutes.js.map