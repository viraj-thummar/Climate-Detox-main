import { Document, ObjectId } from "mongoose";

interface tokenInterface extends Document {
accessToken : {
    token : string,
    expiry : string
}
refreshToken : {
    token : string,
    expiry : string
}
emailVerificationToken : {
    token : string,
    expiry : string
},
phoneVerificationOtp :{
    otp : string,
    expiry : string
},
user : ObjectId,
}

export default tokenInterface;