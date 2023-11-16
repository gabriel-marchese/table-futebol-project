import { NextFunction, Request, Response } from 'express';
import jwt from '../utils/jwt';

class tokenValidate {
  static validateToken(req: Request, res: Response, next: NextFunction): Response | void {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    try {
      const token = authorization.replace('Bearer ', '');
      const newToken = jwt.verify(token);
      res.locals.user = newToken;
      return next();
    } catch (err) {
      res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}

export default tokenValidate;
