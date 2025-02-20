import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import db from "../src/config/db";
import { Users } from "../db/schema";

async function generateUser(role) {
  return {
    id: uuidv4(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    role: role,
    created_at: new Date(),
    updated_at: new Date(),
  };
}

async function generateUsers(role, count) {
  const userPromises = [];
  for (let i = 0; i < count; i++) {
    userPromises.push(generateUser(role));
  }
  return Promise.all(userPromises);
}

async function insertUsers(users) {
  await db.insert(users).into(Users);
}

async function main() {
  const userCount = 10;
  const ownerCount = 5;
  const adminCount = 2;

  const users = await generateUsers("user", userCount);
  const owners = await generateUsers("owner", ownerCount);
  const admins = await generateUsers("admin", adminCount);

  await insertUsers([...users, ...owners, ...admins]);

  console.log("Users generated and inserted successfully");
}

main().catch((error) => {
  console.error("Error generating users:", error);
});
