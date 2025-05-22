import { eq } from "drizzle-orm";
import { UserProfile, Users } from "../../db/schema.js";
import db from "../config/db/index.js";

const getUserById = async (id) => {
  const user = await db
    .select()
    .from(Users)
    .where(eq(Users.id, id))
    .limit(1)
    .execute();
  return user[0];
};

const getUserProfileById = async (id) => {
  const userProfile = await db
    .select()
    .from(UserProfile)
    .where(eq(UserProfile.userId, id))
    .limit(1)
    .execute();
  return userProfile[0];
};

const getUserByEmail = async (email) => {
  const user = await db
    .select()
    .from(Users)
    .where(eq(Users.email, email))
    .limit(1)
    .execute();
  return user[0];
};

const getUserByPhoneNumber = async (phoneNumber) => {
  const user = await db
    .select()
    .from(Users)
    .where(eq(Users.phoneNumber, phoneNumber))
    .limit(1)
    .execute();
  return user[0];
};

const updateUser = async (id, data) => {
  const updatedUser = await db
    .update(Users)
    .set(data)
    .where(eq(Users.id, id))

    .execute();
  return updatedUser[0];
};

const updateUserProfile = async (id, data) => {
  const updatedUserProfile = await db
    .update(UserProfile)
    .set(data)
    .where(eq(UserProfile.userId, id))

    .execute();
  return updatedUserProfile[0];
};

const deleteUser = async (id) => {
  const deletedUser = await db
    .delete(Users)
    .where(eq(Users.id, id))

    .execute();
  return deletedUser[0];
};

export const UserService = {
  getUserById,
  getUserProfileById,
  updateUser,
  updateUserProfile,
  deleteUser,
  getUserByEmail,
  getUserByPhoneNumber,
};
