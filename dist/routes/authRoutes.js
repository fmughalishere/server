import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { register, login, getSavedJobs } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.get('/saved-jobs', protect, getSavedJobs);
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account'
}));
router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: '/login' }), (req, res) => {
    try {
        if (!req.user) {
            console.error("Auth Error: No user object found in request");
            return res.redirect(`${process.env.FRONTEND_URL || 'https://easyjobspk.vercel.app'}/login?error=auth_failed`);
        }
        const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        const userData = JSON.stringify({
            id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            role: req.user.role || 'jobseeker'
        });
        const frontendUrl = process.env.FRONTEND_URL || 'https://easyjobspk.vercel.app';
        console.log("Redirecting to:", frontendUrl);
        res.redirect(`${frontendUrl}/login?token=${token}&user=${encodeURIComponent(userData)}`);
    }
    catch (err) {
        console.error("Internal Server Error in Google Callback:", err);
        res.redirect(`${process.env.FRONTEND_URL || 'https://easyjobspk.vercel.app'}/login?error=server_error`);
    }
});
export default router;
//# sourceMappingURL=authRoutes.js.map