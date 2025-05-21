import { Slots } from "../../db/Slot.js";
import db from "../config/db/index.js";
import { eq } from "drizzle-orm";

const getSlotById = async (id) => {
  const slot = await db
    .select()
    .from(Slots)
    .where(eq(Slots.id, id))
    .limit(1)
    .execute();
  return slot[0];
};

const getAllSlots = async () => {
  const slots = await db.select().from(Slots).execute();
  return slots;
};

const getSlotsByCourtId = async (courtId) => {
  const slots = await db
    .select()
    .from(Slots)
    .where(eq(Slots.courtId, courtId))
    .execute();
  return slots;
};

const createSlot = async (data) => {
  const newSlot = await db.insert(Slots).values(data).returning().execute();
  return newSlot[0];
};

const updateSlot = async (id, data) => {
  const updatedSlot = await db
    .update(Slots)
    .set(data)
    .where(eq(Slots.id, id))
    .returning()
    .execute();
  return updatedSlot[0];
};

const deleteSlot = async (id) => {
  const deletedSlot = await db
    .delete(Slots)
    .where(eq(Slots.id, id))
    .returning()
    .execute();
  return deletedSlot[0];
};

export const SlotService = {
  getSlotById,
  getAllSlots,
  getSlotsByCourtId,
  createSlot,
  updateSlot,
  deleteSlot,
};
