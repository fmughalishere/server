import { Request, Response, NextFunction } from 'express';
interface AuthRequest extends Request {
    user?: any;
}
export declare const authMiddleware: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const isEmployer: (req: AuthRequest, res: Response, next: NextFunction) => void;
export declare const isJobSeeker: (req: AuthRequest, res: Response, next: NextFunction) => void;
export declare const protect: (req: any, res: any, next: any) => Promise<void>;
export {};
//# sourceMappingURL=authMiddleware.d.ts.map