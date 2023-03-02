import mongoose from "mongoose";
import UserModel from "../../models/user.model";

export const getAllUsers = async function getAllUsers() {
  try {
    const allUsers = await UserModel.find();
    return allUsers;
  } catch (e) {
    alert(e);
  }
};
