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

const createSlot = async (data) => {
  const result = await db.insert(Slots).values(data).execute();
  const insertedId = result.insertId;
  const newSlot = await db
    .select()
    .from(Slots)
    .where(eq(Slots.id, insertedId))
    .limit(1)
    .execute();
  return newSlot[0];
};

const updateSlot = async (id, data) => {
  await db.update(Slots).set(data).where(eq(Slots.id, id)).execute();
  const updatedSlot = await db
    .select()
    .from(Slots)
    .where(eq(Slots.id, id))
    .limit(1)
    .execute();
  return updatedSlot[0];
};

const deleteSlot = async (id) => {
  const slotToDelete = await db
    .select()
    .from(Slots)
    .where(eq(Slots.id, id))
    .limit(1)
    .execute();

  if (!slotToDelete[0]) {
    return null;
  }

  await db.delete(Slots).where(eq(Slots.id, id)).execute();
  return slotToDelete[0];
};

export const SlotService = {
  getSlotById,
  getAllSlots,
  createSlot,
  updateSlot,
  deleteSlot,
};
