import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    minLenght: 6,
    unique: true,
  },
  password: { type: String, required: true, minLenght: 6 },
});

const UserModel = mongoose.model("Usuarios", UserSchema);




export default UserModel;
