import { UserService } from "../service/UserService.js";

async function getAllUsers(req, res) {
  try {
    const users = await UserService.getAllUsers(); // Assuming a function to fetch all users exists
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
}

async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await UserService.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ message: "Failed to fetch user" });
  }
}

async function getUserProfile(req, res) {
  try {
    const { id } = req.params;
    const userProfile = await UserService.getUserProfileById(id);
    if (!userProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }
    res.status(200).json(userProfile);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Failed to fetch user profile" });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedUser = await UserService.updateUser(id, data);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Failed to update user" });
  }
}

async function updateUserProfile(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedUserProfile = await UserService.updateUserProfile(id, data);
    if (!updatedUserProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }
    res.status(200).json(updatedUserProfile);
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Failed to update user profile" });
  }
}

async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const deletedUser = await UserService.deleteUser(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Failed to delete user" });
  }
}

export const UserController = {
  getAllUsers,
  getUserById,
  getUserProfile,
  updateUser,
  updateUserProfile,
  deleteUser,
};
