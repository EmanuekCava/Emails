import { Schema, model, Types } from "mongoose";

const { ObjectId } = Types;

const userSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    received: [{
        type: ObjectId,
        ref: 'Message'
    }],
    send: [{
        type: ObjectId,
        ref: 'Message'
    }],
    password: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
    },
    birth: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model('User', userSchema)