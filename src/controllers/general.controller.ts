import { RequestHandler, Request, Response, NextFunction } from 'express';

export const RouteNotFound: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    res.status(404);
    next({
        error: 'Endpoint not found/handled',
        path: req.path,
        method: req.method
    });
}