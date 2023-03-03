import mongoose from "mongoose";
import UserModel from "../../models/user.model";

export const getAllUsers = async function getAllUsers() {
  try {
    const allUsers = await UserModel.find();
    console.log(allUsers);
    return allUsers;
  } catch (e) {
    alert(e);
  }
};

/* export function updateUser(email: string) {
  console.log(email)
  UserModel.find({ email }, function (err: any, docs: any) {
    if (docs.length) {
      console.log("Name exists already");
    } else {
      console.log("No existe todavia..")
    }
  });
}
 */