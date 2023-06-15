import { NextFunction, Request, Response } from 'express';

export type catchAsync = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;
