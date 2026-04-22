import { Request, Response } from 'express';
interface AuthRequest extends Request {
    user?: {
        _id?: string;
        id?: string;
    };
}
export declare const getEmployerStats: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export {};
//# sourceMappingURL=employerdashboardController.d.ts.map