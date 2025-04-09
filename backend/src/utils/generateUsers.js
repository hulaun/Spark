import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import db from "../config/db/index.js";
import { Users } from "../../db/schema.js";

async function generateUser(role) {
  return {
    id: uuidv4(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    role: role,
    created_at: new Date(),
    updated_at: new Date(),
  };
}

export async function generateUsers(role, count) {
  const userPromises = [];
  for (let i = 0; i < count; i++) {
    userPromises.push(generateUser(role));
  }
  return Promise.all(userPromises);
}

export async function insertUsers(users) {
  await db.insert(users).into(Users);
}
