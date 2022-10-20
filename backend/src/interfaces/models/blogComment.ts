import { Document, ObjectId } from "mongoose";

interface blogCommentInterface extends Document {
    blog : ObjectId,
    user : ObjectId,
    userEmail : string,
    userName : string,
    comment : [
        {
            comment : string,
            userEmail : string
        }
    ],

}

export default blogCommentInterface;