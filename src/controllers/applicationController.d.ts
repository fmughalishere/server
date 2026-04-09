import { Request, Response } from 'express';
export declare const applyToJob: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getMyApplications: (req: any, res: Response) => Promise<void>;
export declare const getJobApplicants: (req: any, res: Response) => Promise<void>;
export declare const updateApplicationStatus: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=applicationController.d.ts.map