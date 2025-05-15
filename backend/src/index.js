import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
dotenv.config({ path: ".env.local" });
import cors from "cors";
import { createServer } from "http";
const app = express();
const server = createServer(app);
import morgan from "morgan";
const port = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;
import route from "./routes/index.js";

app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(
  cors({
    origin: ["https://localhost:5000", "http://0.0.0.0:5000"],
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(morgan("dev"));
route(app);

console.log(host);

// Start the server
server.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`);
});
