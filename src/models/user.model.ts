import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  userName: { type: String, required: true, minLenght: 6, unique: true },
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

UserSchema.path('email').validate(async (email) => {
  const emailCount = await mongoose.models.Usuarios.countDocuments({ email })
  return !emailCount
}, 'Email already exists')


export default UserModel;
