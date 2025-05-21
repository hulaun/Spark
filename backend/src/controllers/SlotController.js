import { SlotService } from "../service/SlotService.js";

async function getAllSlots(req, res) {
  try {
    const slots = await SlotService.getAllSlots();
    res.status(200).json(slots);
  } catch (error) {
    console.error("Error fetching slots:", error);
    res.status(500).json({ message: "Failed to fetch slots" });
  }
}

async function getSlotById(req, res) {
  try {
    const { id } = req.params;
    const slot = await SlotService.getSlotById(id);
    if (!slot) {
      return res.status(404).json({ message: "Slot not found" });
    }
    res.status(200).json(slot);
  } catch (error) {
    console.error("Error fetching slot by ID:", error);
    res.status(500).json({ message: "Failed to fetch slot" });
  }
}

async function getSlotsByCourtId(req, res) {
  try {
    const { courtId } = req.params;
    const slots = await SlotService.getSlotsByCourtId(courtId);
    res.status(200).json(slots);
  } catch (error) {
    console.error("Error fetching slots by court ID:", error);
    res.status(500).json({ message: "Failed to fetch slots" });
  }
}

async function createSlot(req, res) {
  try {
    const data = req.body;
    const newSlot = await SlotService.createSlot(data);
    res.status(201).json(newSlot);
  } catch (error) {
    console.error("Error creating slot:", error);
    res.status(500).json({ message: "Failed to create slot" });
  }
}

async function updateSlot(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedSlot = await SlotService.updateSlot(id, data);
    if (!updatedSlot) {
      return res.status(404).json({ message: "Slot not found" });
    }
    res.status(200).json(updatedSlot);
  } catch (error) {
    console.error("Error updating slot:", error);
    res.status(500).json({ message: "Failed to update slot" });
  }
}

async function deleteSlot(req, res) {
  try {
    const { id } = req.params;
    const deletedSlot = await SlotService.deleteSlot(id);
    if (!deletedSlot) {
      return res.status(404).json({ message: "Slot not found" });
    }
    res.status(200).json({ message: "Slot deleted successfully" });
  } catch (error) {
    console.error("Error deleting slot:", error);
    res.status(500).json({ message: "Failed to delete slot" });
  }
}

export const SlotController = {
  getAllSlots,
  getSlotById,
  getSlotsByCourtId,
  createSlot,
  updateSlot,
  deleteSlot,
};
