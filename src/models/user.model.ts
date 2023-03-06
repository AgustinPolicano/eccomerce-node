import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    minLenght: 6,
    unique: true,
    /*   validate: {
      validator: function (v: any, cb: any) {
        UserModel.find({ name: v }, function (err: any, docs: any) {
          cb(docs.length == 0);
        });
      },
      message: "User already exists!",
    }, */
  },
  password: { type: String, required: true, minLenght: 6 },
});

const UserModel = mongoose.model("Usuarios", UserSchema);




export default UserModel;
