import type { Request, Response } from 'express';
export declare const getAllBlogs: (req: Request, res: Response) => Promise<void>;
export declare const getBlogById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createBlog: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=blogController.d.ts.map