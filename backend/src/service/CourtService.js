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
  const newCourt = await db.insert(Courts).values(data).returning().execute();
  return newCourt[0];
};

const updateCourt = async (id, data) => {
  const updatedCourt = await db
    .update(Courts)
    .set(data)
    .where(eq(Courts.id, id))
    .returning()
    .execute();
  return updatedCourt[0];
};

const deleteCourt = async (id) => {
  const deletedCourt = await db
    .delete(Courts)
    .where(eq(Courts.id, id))
    .returning()
    .execute();
  return deletedCourt[0];
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
