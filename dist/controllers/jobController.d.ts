import { Request, Response } from 'express';
export declare const postJob: (req: any, res: Response) => Promise<void>;
export declare const getAllJobs: (req: Request, res: Response) => Promise<void>;
export declare const getMyJobs: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const toggleSaveJob: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getSavedJobs: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=jobController.d.ts.map