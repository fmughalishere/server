import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { register, login, getSavedJobs } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.get('/saved-jobs', protect, getSavedJobs);
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  (req: any, res: any) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET as string, { expiresIn: '7d' });
    
    const userData = JSON.stringify({
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    });

    res.redirect(`${process.env.FRONTEND_URL}/login?token=${token}&user=${encodeURIComponent(userData)}`);
  }
);

export default router;