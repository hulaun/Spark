import { Venues } from "../../db/Venue.js";
import db from "../config/db/index.js";
import { eq } from "drizzle-orm";

const getVenueById = async (id) => {
  const venue = await db
    .select()
    .from(Venues)
    .where(eq(Venues.id, id))
    .limit(1)
    .execute();
  return venue[0];
};

const getAllVenues = async () => {
  const venues = await db.select().from(Venues).execute();
  return venues;
};

const createVenue = async (data) => {
  const result = await db.insert(Venues).values(data).execute();
  const insertedId = result.insertId;
  const newVenue = await db
    .select()
    .from(Venues)
    .where(eq(Venues.id, insertedId))
    .limit(1)
    .execute();
  return newVenue[0];
};

const updateVenue = async (id, data) => {
  await db.update(Venues).set(data).where(eq(Venues.id, id)).execute();
  const updatedVenue = await db
    .select()
    .from(Venues)
    .where(eq(Venues.id, id))
    .limit(1)
    .execute();
  return updatedVenue[0];
};

const deleteVenue = async (id) => {
  const venueToDelete = await db
    .select()
    .from(Venues)
    .where(eq(Venues.id, id))
    .limit(1)
    .execute();

  if (!venueToDelete[0]) {
    return null;
  }

  await db.delete(Venues).where(eq(Venues.id, id)).execute();
  return venueToDelete[0];
};

export const VenueService = {
  getVenueById,
  getAllVenues,
  createVenue,
  updateVenue,
  deleteVenue,
};
