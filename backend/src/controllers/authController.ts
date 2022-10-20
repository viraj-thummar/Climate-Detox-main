import { IRequest, IResponse, INext } from "../interfaces/vendors"
import BaseError from "../error/baseError";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import User from "../models/user";
import environment from "../config/environment";
import Token from "../models/token";

const AuthController = {
    login: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            const { userEmail, userPassword } = req.body;
            if (!userEmail)
                throw new BaseError('Email Required !!')
            let userDetail = await User.findOne({ email: userEmail });
            if (userDetail) {
                const payload = {
                    exp: moment().add(environment.jwtExpirationInterval, 'hours').unix(),
                    iat: moment().unix(),
                    sub: userDetail._id,
                };
                const expires = moment().add(environment.jwtExpirationInterval, 'hours').toDate();
                const token = jwt.sign(payload, environment.jwtSecret as string)
                let accessToken = {
                    token: token,
                    expiry: String(expires)
                }
                let updateToken = Token.findOneAndUpdate({ user: userDetail._id }, { $set: { accessToken: accessToken } })
                if (!updateToken)
                    throw new BaseError('Something went wrong!!')

                let isPasswordTrue = await bcrypt.compare(userPassword, userDetail.password);
                if (!isPasswordTrue) {
                    throw new BaseError('Credencials Mismached')
                }
                return res.status(200).send({ status: true, message: 'SUCCESS', data: userDetail });
            } else {
                throw new BaseError('No User Found!!')
            }

        } catch (err) {
            next(err)
        }
    },
    register: async (req: IRequest, res: IResponse, next: INext) => {
        try{

        }catch(err){
            next(err)
        }
    },
    forgotPassword: async (req: IRequest, res: IResponse, next: INext) => {
        try{

        }catch(err){
            next(err)
        }
     },
    resetPassword: async (req: IRequest, res: IResponse, next: INext) => { 
        try{

        }catch(err){
            next(err)
        }
    },
}

export default AuthController;