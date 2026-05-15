import express from 'express';
import * as adminCtrl from '../controllers/adminController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { adminMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware, adminMiddleware);

router.get('/stats', adminCtrl.getAllStats);

router.get('/users', adminCtrl.getAllUsers);
router.patch('/users/approve-employer/:id', adminCtrl.toggleEmployerStatus);
router.delete('/users/:id', adminCtrl.deleteUser);

router.delete('/jobs/:id', adminCtrl.deleteJob);

router.patch('/applications/status/:id', adminCtrl.updateApplicationStatus);

export default router;