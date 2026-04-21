import express from 'express';
import { 
  postJob, 
  getAllJobs, 
  getMyJobs, 
  getJobById,
  getSavedJobs, 
  toggleSaveJob 
} from '../controllers/jobController.js';
import { authMiddleware, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllJobs);
router.get('/my-jobs', protect, getMyJobs);
router.get('/saved-jobs', protect, getSavedJobs);
router.get('/:id', getJobById);
router.post('/', authMiddleware, postJob);
router.post('/save/:jobId', protect, toggleSaveJob);

export default router;