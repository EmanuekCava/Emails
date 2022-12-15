import { Schema, model, Types } from "mongoose";

const { ObjectId } = Types;

const messageSchema = new Schema({

    subject: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    to: {
        type: ObjectId,
        ref: 'User'
    },
    from: {
        type: ObjectId,
        ref: 'User'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model('Message', messageSchema)