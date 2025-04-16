import db from "../config/db/index.js";

async function index(req, res) {
  db.connect();
  const users = await db.select().from("users");
  res.send("Hello from user route");
}

export const UserController = {
  index,
};
