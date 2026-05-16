import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export interface AuthRequest extends Request {
  user?: any;
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token provided' });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = await User.findById(decoded.id).select('-password');
    
    if (!req.user) {
      return res.status(401).json({ message: 'User no longer exists' });
    }

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

export const isEmployer = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === 'employer') {
    next();
  } else {
    return res.status(403).json({ 
      message: 'Access denied. This action is only for Registered Companies (Employers).' 
    });
  }
};

export const isJobSeeker = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === 'jobseeker') {
    next();
  } else {
    return res.status(403).json({ 
      message: 'Access denied. This action is only for Job Seekers.' 
    });
  }
};


export const adminMiddleware = (req: any, res: any, next: any) => {
  const allowedRoles = ['cheifAdmin', 'subAdmin', 'admin'];
  
  if (req.user && allowedRoles.includes(req.user.role)) {
    next();
  } else {
    res.status(403).json({ message: "Access Denied: You do not have admin privileges" });
  }
};
export const authMiddleware = protect;
