import { Document, ObjectId } from "mongoose";

interface supportInterface extends Document {
    ticket_id: string,
    ticket_heading: string,
    ticket_desc: string,
    ticket_comment: [{
        user: ObjectId,
        comment: string
    }]
}

export default supportInterface;