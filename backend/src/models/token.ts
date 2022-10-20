import mongoose, { model, Model, Schema } from 'mongoose';
import tokenInterface from '../interfaces/models/token';

const TokenSchema = new Schema<tokenInterface>({
    accessToken: {
        token: {
            type: String,
        },
        expiry: {
            type: String
        }
    },
    refreshToken: {
        token: {
            type: String,
        },
        expiry: {
            type: String
        }
    },
    emailVerificationToken: {
        token: {
            type: String,
        },
        expiry: {
            type: String
        }
    },
    phoneVerificationOtp: {
        otp: {
            type: String,
        },
        expiry: {
            type: String
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true,
})

const Tokenschema: Model<tokenInterface> = model('Token', TokenSchema)
export default Tokenschema;