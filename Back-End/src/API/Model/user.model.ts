import { Schema, model } from "mongoose";

const user_Schema = new Schema({
    first_name: {
        type: String,
        required: [true, "Enter first name"]
    },
    last_name: {
        type: String,
        required: [true, "Enter last name"]
    },
    email: {
        type: String,
        required: [true, "Enter email ID"],
        unique: true
    },
    mobile_no: {
        type: String,
        required: [true, "Enter your mobile no"],
        unique: true
    },
    address: {
        type: String,
        required: [true, "Enter your address"]
    }
})

const user_Model = model('Users', user_Schema)

export { user_Model }