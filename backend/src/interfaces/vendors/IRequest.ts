import { Request } from 'express';

export interface IRequest extends Request {
    userData ?: any,
    siteId ?: any
}