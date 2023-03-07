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

export const isCorrectPasword = (
  passwordUser: string,
  dataBasePassword: string
): boolean => {
  if (passwordUser === dataBasePassword) {
    return true;
  } else;
  return false;
};
