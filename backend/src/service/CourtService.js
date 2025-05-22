import { Courts } from "../../db/Court.js";
import db from "../config/db/index.js";
import { eq } from "drizzle-orm";

const getCourtById = async (id) => {
  const court = await db
    .select()
    .from(Courts)
    .where(eq(Courts.id, id))
    .limit(1)
    .execute();
  return court[0];
};

const getAllCourts = async () => {
  const courts = await db.select().from(Courts).execute();
  return courts;
};

const getCourtsByVenue = async (venueId) => {
  const courts = await db
    .select()
    .from(Courts)
    .where(eq(Courts.venueId, venueId))
    .execute();
  return courts;
};

const getCourtByName = async (name, venueId) => {
  const court = await db
    .select()
    .from(Courts)
    .where(eq(Courts.name, name))
    .where(eq(Courts.venueId, venueId))
    .limit(1)
    .execute();
  return court[0];
};

const createCourt = async (data) => {
  const result = await db.insert(Courts).values(data).execute();
  const insertedId = result.insertId;
  const newCourt = await db
    .select()
    .from(Courts)
    .where(eq(Courts.id, insertedId))
    .limit(1)
    .execute();
  return newCourt[0];
};

const updateCourt = async (id, data) => {
  await db.update(Courts).set(data).where(eq(Courts.id, id)).execute();
  const updatedCourt = await db
    .select()
    .from(Courts)
    .where(eq(Courts.id, id))
    .limit(1)
    .execute();
  return updatedCourt[0];
};

const deleteCourt = async (id) => {
  const courtToDelete = await db
    .select()
    .from(Courts)
    .where(eq(Courts.id, id))
    .limit(1)
    .execute();

  if (!courtToDelete[0]) {
    return null;
  }

  await db.delete(Courts).where(eq(Courts.id, id)).execute();
  return courtToDelete[0];
};
export const CourtService = {
  getCourtById,
  getAllCourts,
  getCourtsByVenue,
  getCourtByName,
  createCourt,
  updateCourt,
  deleteCourt,
};
