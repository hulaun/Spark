import { VenueService } from "../service/VenueService.js";

async function getAllVenues(req, res) {
  try {
    const venues = await VenueService.getAllVenues();
    res.status(200).json(venues);
  } catch (error) {
    console.error("Error fetching venues:", error);
    res.status(500).json({ message: "Failed to fetch venues" });
  }
}

async function getVenueById(req, res) {
  try {
    const { id } = req.params;
    const venue = await VenueService.getVenueById(id);
    if (!venue) {
      return res.status(404).json({ message: "Venue not found" });
    }
    res.status(200).json(venue);
  } catch (error) {
    console.error("Error fetching venue by ID:", error);
    res.status(500).json({ message: "Failed to fetch venue" });
  }
}

async function createVenue(req, res) {
  try {
    const data = req.body;
    const newVenue = await VenueService.createVenue(data);
    res.status(201).json(newVenue);
  } catch (error) {
    console.error("Error creating venue:", error);
    res.status(500).json({ message: "Failed to create venue" });
  }
}

async function updateVenue(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedVenue = await VenueService.updateVenue(id, data);
    if (!updatedVenue) {
      return res.status(404).json({ message: "Venue not found" });
    }
    res.status(200).json(updatedVenue);
  } catch (error) {
    console.error("Error updating venue:", error);
    res.status(500).json({ message: "Failed to update venue" });
  }
}

async function deleteVenue(req, res) {
  try {
    const { id } = req.params;
    const deletedVenue = await VenueService.deleteVenue(id);
    if (!deletedVenue) {
      return res.status(404).json({ message: "Venue not found" });
    }
    res.status(200).json({ message: "Venue deleted successfully" });
  } catch (error) {
    console.error("Error deleting venue:", error);
    res.status(500).json({ message: "Failed to delete venue" });
  }
}

export const VenueController = {
  getAllVenues,
  getVenueById,
  createVenue,
  updateVenue,
  deleteVenue,
};
