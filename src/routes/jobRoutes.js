import express from 'express';
import { postJob, getAllJobs } from '../controllers/jobController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router = express.Router();
router.get('/', getAllJobs);
router.post('/', authMiddleware, postJob);
export default router;
//# sourceMappingURL=jobRoutes.js.map