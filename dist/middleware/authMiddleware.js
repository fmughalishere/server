import jwt from 'jsonwebtoken';
import User from '../models/User.js';
export const authMiddleware = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        if (!req.user) {
            return res.status(401).json({ message: 'User not found with this token' });
        }
        next();
    }
    catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};
export const isEmployer = (req, res, next) => {
    if (req.user && req.user.role === 'employer') {
        next();
    }
    else {
        res.status(403).json({ message: 'Access denied. Only Employers can access this.' });
    }
};
export const isJobSeeker = (req, res, next) => {
    if (req.user && req.user.role === 'jobseeker') {
        next();
    }
    else {
        res.status(403).json({ message: 'Access denied. Only Job Seekers can access this.' });
    }
};
export const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        }
        catch (error) {
            res.status(401).json({ message: "Not authorized, token failed" });
        }
    }
    if (!token) {
        res.status(401).json({ message: "Not authorized, no token" });
    }
};
//# sourceMappingURL=authMiddleware.js.map