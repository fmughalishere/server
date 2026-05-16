import express from 'express';
import { register, companyRegister, login, verifyEmail, cheifadminRegister } from '../controllers/authController.js';
import { getSavedJobs } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();
router.post('/register', register);
router.post('/company-register', companyRegister);
router.post('/cheifAdmin-register', cheifadminRegister);
router.post('/login', login);
router.get('/saved-jobs', protect, getSavedJobs);
router.get('/verify-email', verifyEmail);
router.post('/logout', (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Logout failed"
        });
    }
});
export default router;
//# sourceMappingURL=authRoutes.js.map