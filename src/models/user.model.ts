import mongoose from "mongoose"

const Schema = mongoose.Schema

const UserSchema = new Schema ({
    userName: {type: String, required: true, minLenght: 6},
    email: {type: String, required: true, minLenght: 6},
    password: {type: String, required: true, minLenght: 6}
})

const UserModel = mongoose.model('Usuarios', UserSchema)

export default UserModel;