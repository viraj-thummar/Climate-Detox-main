import BaseError from "../error/baseError";
import { INext, IRequest, IResponse } from "../interfaces/vendors";


const RoleValidation = (role : string[]) => async (req: IRequest, res: IResponse, next: INext) => {
    try{
        if(!req.userData){
            throw new BaseError('AUTHENTICATION REQUIRED' , 401)
        }
        if(!role.includes(req.userData.userRole)){
            throw new BaseError('ACCESS DENIED' , 401)
        }
        next()
    }catch(err){
        next(err)
    }
}

export default RoleValidation;