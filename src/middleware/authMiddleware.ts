import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
interface AuthRequest extends Request {
  user?: any;
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    
    // Database se user nikaal kar request mein daal dena
    // Is se humein req.user.role aur req.user.id har jagah mil jayega
    req.user = await User.findById(decoded.id).select('-password');
    
    if (!req.user) {
      return res.status(401).json({ message: 'User not found with this token' });
    }

    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// 2. Sirf Employer ke liye Access
export const isEmployer = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === 'employer') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Only Employers can access this.' });
  }
};

// 3. Sirf Job Seeker ke liye Access
export const isJobSeeker = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === 'jobseeker') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Only Job Seekers can access this.' });
  }
};