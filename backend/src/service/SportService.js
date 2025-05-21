import { Sports } from "../../db/Sport.js";
import db from "../config/db/index.js";
import { eq } from "drizzle-orm";

const getSportById = async (id) => {
  const sport = await db
    .select()
    .from(Sports)
    .where(eq(Sports.id, id))
    .limit(1)
    .execute();
  return sport[0];
};

const getAllSports = async () => {
  const sports = await db.select().from(Sports).execute();
  return sports;
};

const getSportByName = async (name) => {
  const sport = await db
    .select()
    .from(Sports)
    .where(eq(Sports.name, name))
    .limit(1)
    .execute();
  return sport[0];
};

const createSport = async (data) => {
  const newSport = await db.insert(Sports).values(data).returning().execute();
  return newSport[0];
};

const updateSport = async (id, data) => {
  const updatedSport = await db
    .update(Sports)
    .set(data)
    .where(eq(Sports.id, id))
    .returning()
    .execute();
  return updatedSport[0];
};

const deleteSport = async (id) => {
  const deletedSport = await db
    .delete(Sports)
    .where(eq(Sports.id, id))
    .returning()
    .execute();
  return deletedSport[0];
};

export const SportService = {
  getSportById,
  getAllSports,
  getSportByName,
  createSport,
  updateSport,
  deleteSport,
};
