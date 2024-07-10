import User from "../models/user-model";

export default async function create_user(user) {
  try {
    await User.create(user);
  } catch (err) {
    throw new Error(err);
  }
}
