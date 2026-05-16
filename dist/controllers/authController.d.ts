import { Request, Response } from 'express';
export declare const register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const cheifadminRegister: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const companyRegister: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const verifyEmail: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getSavedJobs: (req: any, res: Response) => Promise<void>;
//# sourceMappingURL=authController.d.ts.map