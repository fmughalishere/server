const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    
    const userData = JSON.stringify({
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    });
    res.redirect(`${process.env.FRONTEND_URL}/login?token=${token}&user=${encodeURIComponent(userData)}`);
  }
);

module.exports = router;