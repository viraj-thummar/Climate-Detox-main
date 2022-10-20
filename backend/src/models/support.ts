import mongoose, { model, Model, Schema } from 'mongoose';
import supportInterface from '../interfaces/models/support'

const supportSchema = new Schema<supportInterface>({
    ticket_id: { type: String },
    ticket_heading: { type: String },
    ticket_desc: { type: String },
    ticket_comment: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        comment: { type: String }
    }]
}, { timestamps: true, autoIndex: true })

const Supportschema: Model<supportInterface> = model('Support', supportSchema)
export default Supportschema;