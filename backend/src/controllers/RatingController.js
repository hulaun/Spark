import { RatingService } from "../service/RatingService.js";

async function getAllRatings(req, res) {
  try {
    const ratings = await RatingService.getAllRatings();
    res.status(200).json(ratings);
  } catch (error) {
    console.error("Error fetching ratings:", error);
    res.status(500).json({ message: "Failed to fetch ratings" });
  }
}

async function getRatingById(req, res) {
  try {
    const { id } = req.params;
    const rating = await RatingService.getRatingById(id);
    if (!rating) {
      return res.status(404).json({ message: "Rating not found" });
    }
    res.status(200).json(rating);
  } catch (error) {
    console.error("Error fetching rating by ID:", error);
    res.status(500).json({ message: "Failed to fetch rating" });
  }
}

async function getRatingsByUserId(req, res) {
  try {
    const { userId } = req.params;
    const ratings = await RatingService.getRatingsByUserId(userId);
    res.status(200).json(ratings);
  } catch (error) {
    console.error("Error fetching ratings by user ID:", error);
    res.status(500).json({ message: "Failed to fetch ratings" });
  }
}

async function createRating(req, res) {
  try {
    const data = req.body;
    const newRating = await RatingService.createRating(data);
    res.status(201).json(newRating);
  } catch (error) {
    console.error("Error creating rating:", error);
    res.status(500).json({ message: "Failed to create rating" });
  }
}

async function updateRating(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedRating = await RatingService.updateRating(id, data);
    if (!updatedRating) {
      return res.status(404).json({ message: "Rating not found" });
    }
    res.status(200).json(updatedRating);
  } catch (error) {
    console.error("Error updating rating:", error);
    res.status(500).json({ message: "Failed to update rating" });
  }
}

async function deleteRating(req, res) {
  try {
    const { id } = req.params;
    const deletedRating = await RatingService.deleteRating(id);
    if (!deletedRating) {
      return res.status(404).json({ message: "Rating not found" });
    }
    res.status(200).json({ message: "Rating deleted successfully" });
  } catch (error) {
    console.error("Error deleting rating:", error);
    res.status(500).json({ message: "Failed to delete rating" });
  }
}

export const RatingController = {
  getAllRatings,
  getRatingById,
  getRatingsByUserId,
  createRating,
  updateRating,
  deleteRating,
};
