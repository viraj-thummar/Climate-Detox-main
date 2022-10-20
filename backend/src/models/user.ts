import mongoose, { model, Model, Schema } from 'mongoose';
import usersInterface from '../interfaces/models/user'

const userSchema = new Schema<usersInterface>({
    name: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password : {
        type : String
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    social_login: {
        active: {
            type: Boolean
        },
        platform: [
            {
                platform_name: {
                    type: String
                },
                config: {}
            }
        ]
    },
    role: {
        type: String
    },
    phone: {
        type: String
    },
    country_code: {
        type: String
    },
    current_location: {
        type: String
    },
    last_location: {
        type: String
    },
    last_login: {
        type: String
    },
    timezone: {
        type: String
    },
    active: {
        type: String
    },
    is_disbaled: {
        type: Boolean
    },
    disabled_duration: {
        type: String
    },
    ip_address: [
        {
            is_trusted: {
                type: Boolean
            },
            ip: {
                type: String
            }
        }
    ],
    location: {
        state: {
            type: String
        },
        country: {
            type: String
        }
    },
    is_dual_auth_enabled: {
        type: Boolean
    },
    can_use_default_password: {
        type: Boolean
    },
    failed_login_attempts: { type: Number }
}, { timestamps: true, autoIndex: true })

const Userschema: Model<usersInterface> = model('User', userSchema)
export default Userschema;