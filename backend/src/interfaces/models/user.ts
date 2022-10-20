import { Document, ObjectId } from "mongoose";

interface usersInterface extends Document {
    name: string,
    username: string,
    email: string,
    password : string,
    first_name: string,
    last_name: string,
    social_login: {
        active: boolean,
        platform: [
            {
                platform_name: string,
                config: {}
            }
        ]
    },
    role: string,
    phone: string,
    country_code: string,
    current_location: string,
    last_location: string,
    last_login: string,
    timezone: string,
    active: string,
    is_disbaled : boolean,
    disabled_duration : string,
    ip_address: [
        {
            is_trusted: boolean,
            ip: string
        }
    ],
    location: {
        state: string,
        country: string
    }
    is_dual_auth_enabled: boolean,
    can_use_default_password: boolean,
    failed_login_attempts : number
}

export default usersInterface;