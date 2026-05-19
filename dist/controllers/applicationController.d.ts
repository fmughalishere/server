import { Response } from 'express';
export declare const getEmployerApplicants: (req: any, res: Response) => Promise<void>;
export declare const updateApplicationStatus: (req: any, res: Response) => Promise<void>;
export declare const getJobseekerStats: (req: any, res: Response) => Promise<void>;
export declare const getMyApplications: (req: any, res: Response) => Promise<void>;
export declare const createApplication: (req: any, res: any) => Promise<void>;
export declare const getSingleApplication: (req: any, res: any) => Promise<any>;
export declare const sendJobOffer: (req: any, res: any) => Promise<any>;
export declare const deleteApplication: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=applicationController.d.ts.map