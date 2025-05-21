import { SportService } from "../service/SportService.js";

async function getAllSports(req, res) {
  try {
    const sports = await SportService.getAllSports();
    res.status(200).json(sports);
  } catch (error) {
    console.error("Error fetching sports:", error);
    res.status(500).json({ message: "Failed to fetch sports" });
  }
}

async function getSportById(req, res) {
  try {
    const { id } = req.params;
    const sport = await SportService.getSportById(id);
    if (!sport) {
      return res.status(404).json({ message: "Sport not found" });
    }
    res.status(200).json(sport);
  } catch (error) {
    console.error("Error fetching sport by ID:", error);
    res.status(500).json({ message: "Failed to fetch sport" });
  }
}

async function createSport(req, res) {
  try {
    const data = req.body;
    const newSport = await SportService.createSport(data);
    res.status(201).json(newSport);
  } catch (error) {
    console.error("Error creating sport:", error);
    res.status(500).json({ message: "Failed to create sport" });
  }
}

async function updateSport(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedSport = await SportService.updateSport(id, data);
    if (!updatedSport) {
      return res.status(404).json({ message: "Sport not found" });
    }
    res.status(200).json(updatedSport);
  } catch (error) {
    console.error("Error updating sport:", error);
    res.status(500).json({ message: "Failed to update sport" });
  }
}

async function deleteSport(req, res) {
  try {
    const { id } = req.params;
    const deletedSport = await SportService.deleteSport(id);
    if (!deletedSport) {
      return res.status(404).json({ message: "Sport not found" });
    }
    res.status(200).json({ message: "Sport deleted successfully" });
  } catch (error) {
    console.error("Error deleting sport:", error);
    res.status(500).json({ message: "Failed to delete sport" });
  }
}

export const SportController = {
  getAllSports,
  getSportById,
  createSport,
  updateSport,
  deleteSport,
};
