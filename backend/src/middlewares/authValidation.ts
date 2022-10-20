import BaseError from "../error/baseError";
import { INext, IRequest, IResponse } from "../interfaces/vendors";
import User from '../models/user';
import Token from '../models/token';
import environment from "../config/environment";
import jwt, { Secret } from 'jsonwebtoken';
import { ObjectId } from "mongoose";
import moment from "moment";


const AuthValidation = () => async (req: IRequest, res: IResponse, next: INext) => {
    try {
        const headerValue: any = req.headers['authorization'] || '';
        if (!headerValue)
            throw new BaseError('Authentication Token Required', 401);

        const user: any = jwt.verify(headerValue, environment.jwtSecret as Secret);
        if (!user?.sub)
            throw new BaseError('invalid user', 401);

        const userId = user?.sub;
        const userDetails = await User.findById(user?.sub);
        if (!userDetails)
            throw new BaseError('unauthorized access', 401);

        const tokenDetails = await Token.findOne({ user : userId as unknown as ObjectId })
        if (tokenDetails?.accessToken.token !== headerValue)
            throw new BaseError('invalid token', 401);

        if (moment(tokenDetails?.accessToken.expiry, "DD-MM-YYYY HH:mm:ss").isAfter(moment().format("DD-MM-YYYY HH:mm:ss")))
            throw new BaseError('token expired', 401);

        req.userData = userDetails;
        next();
    } catch (error) {
        next(error);
    }
}



export default AuthValidation;
