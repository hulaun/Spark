import { Ratings } from "../../db/Rating.js";
import db from "../config/db/index.js";
import { eq } from "drizzle-orm";

const getRatingById = async (id) => {
  const rating = await db
    .select()
    .from(Ratings)
    .where(eq(Ratings.id, id))
    .limit(1)
    .execute();
  return rating[0];
};

const getAllRatings = async () => {
  const ratings = await db.select().from(Ratings).execute();
  return ratings;
};

const getRatingsByUserId = async (userId) => {
  const ratings = await db
    .select()
    .from(Ratings)
    .where(eq(Ratings.userId, userId))
    .execute();
  return ratings;
};

const createRating = async (data) => {
  const result = await db.insert(Ratings).values(data).execute();
  const insertedId = result.insertId;
  const newRating = await db
    .select()
    .from(Ratings)
    .where(eq(Ratings.id, insertedId))
    .limit(1)
    .execute();
  return newRating[0];
};

const updateRating = async (id, data) => {
  await db.update(Ratings).set(data).where(eq(Ratings.id, id)).execute();
  const updatedRating = await db
    .select()
    .from(Ratings)
    .where(eq(Ratings.id, id))
    .limit(1)
    .execute();
  return updatedRating[0];
};

const deleteRating = async (id) => {
  const ratingToDelete = await db
    .select()
    .from(Ratings)
    .where(eq(Ratings.id, id))
    .limit(1)
    .execute();

  if (!ratingToDelete[0]) {
    return null;
  }

  await db.delete(Ratings).where(eq(Ratings.id, id)).execute();
  return ratingToDelete[0];
};

export const RatingService = {
  getRatingById,
  getAllRatings,
  getRatingsByUserId,
  createRating,
  updateRating,
  deleteRating,
};
