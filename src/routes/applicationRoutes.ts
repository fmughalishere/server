import express from 'express';
const router = express.Router();
import { 
    createApplication, 
    getMyApplications, 
    getJobseekerStats, 
    getSingleApplication, 
    getEmployerApplicants, 
    updateApplicationStatus 
} from '../controllers/applicationController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/', protect, createApplication); 
router.get('/employer/all-applicants', getEmployerApplicants);
router.put('/status/:id', protect, updateApplicationStatus);
router.get('/jobseeker-stats', protect, getJobseekerStats);
router.get('/my-applications', protect, getMyApplications);
router.get('/:id', protect, getSingleApplication);

export default router;