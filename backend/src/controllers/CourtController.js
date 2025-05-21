import { CourtService } from "../service/CourtService.js";

async function getAllCourts(req, res) {
  try {
    const courts = await CourtService.getAllCourts();
    res.status(200).json(courts);
  } catch (error) {
    console.error("Error fetching courts:", error);
    res.status(500).json({ message: "Failed to fetch courts" });
  }
}

async function getCourtById(req, res) {
  try {
    const { id } = req.params;
    const court = await CourtService.getCourtById(id);
    if (!court) {
      return res.status(404).json({ message: "Court not found" });
    }
    res.status(200).json(court);
  } catch (error) {
    console.error("Error fetching court by ID:", error);
    res.status(500).json({ message: "Failed to fetch court" });
  }
}

async function createCourt(req, res) {
  try {
    const data = req.body;
    const newCourt = await CourtService.createCourt(data);
    res.status(201).json(newCourt);
  } catch (error) {
    console.error("Error creating court:", error);
    res.status(500).json({ message: "Failed to create court" });
  }
}

async function updateCourt(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedCourt = await CourtService.updateCourt(id, data);
    if (!updatedCourt) {
      return res.status(404).json({ message: "Court not found" });
    }
    res.status(200).json(updatedCourt);
  } catch (error) {
    console.error("Error updating court:", error);
    res.status(500).json({ message: "Failed to update court" });
  }
}

async function deleteCourt(req, res) {
  try {
    const { id } = req.params;
    const deletedCourt = await CourtService.deleteCourt(id);
    if (!deletedCourt) {
      return res.status(404).json({ message: "Court not found" });
    }
    res.status(200).json({ message: "Court deleted successfully" });
  } catch (error) {
    console.error("Error deleting court:", error);
    res.status(500).json({ message: "Failed to delete court" });
  }
}

export const CourtController = {
  getAllCourts,
  getCourtById,
  createCourt,
  updateCourt,
  deleteCourt,
};
