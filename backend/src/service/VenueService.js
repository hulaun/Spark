import { Venues } from "../../db/Venue.js";
import { Courts } from "../../db/Court.js";
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

const getVenuesByManager = async (managerId) => {
  const venues = await db
    .select()
    .from(Venues)
    .where(eq(Venues.managerId, managerId))
    .execute();
  return venues;
};

const getVenueByName = async (name) => {
  const venue = await db
    .select()
    .from(Venues)
    .where(eq(Venues.name, name))
    .limit(1)
    .execute();
  return venue[0];
};

const getVenueCourts = async (venueId) => {
  const courts = await db
    .select()
    .from(Courts)
    .where(eq(Courts.venueId, venueId))
    .execute();
  return courts;
};

const createVenue = async (data) => {
  const newVenue = await db.insert(Venues).values(data).returning().execute();
  return newVenue[0];
};

const updateVenue = async (id, data) => {
  const updatedVenue = await db
    .update(Venues)
    .set(data)
    .where(eq(Venues.id, id))
    .returning()
    .execute();
  return updatedVenue[0];
};

const deleteVenue = async (id) => {
  const deletedVenue = await db
    .delete(Venues)
    .where(eq(Venues.id, id))
    .returning()
    .execute();
  return deletedVenue[0];
};

export const VenueService = {
  getVenueById,
  getAllVenues,
  getVenuesByManager,
  getVenueByName,
  getVenueCourts,
  createVenue,
  updateVenue,
  deleteVenue,
};
