import jwt from 'jsonwebtoken';
import User from '../models/User.js';
export const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        if (!req.user) {
            return res.status(401).json({ message: 'User no longer exists' });
        }
        next();
    }
    catch (error) {
        console.error("Auth Middleware Error:", error);
        return res.status(401).json({ message: 'Not authorized, token failed' });
    }
};
export const isEmployer = (req, res, next) => {
    if (req.user && req.user.role === 'employer') {
        next();
    }
    else {
        return res.status(403).json({
            message: 'Access denied. This action is only for Registered Companies (Employers).'
        });
    }
};
export const isJobSeeker = (req, res, next) => {
    if (req.user && req.user.role === 'jobseeker') {
        next();
    }
    else {
        return res.status(403).json({
            message: 'Access denied. This action is only for Job Seekers.'
        });
    }
};
export const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    }
    else {
        return res.status(403).json({ message: 'Access denied. Admin only.' });
    }
};
export const authMiddleware = protect;
//# sourceMappingURL=authMiddleware.js.map