import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
dotenv.config({ path: ".env.local" });
const cors = require("cors");
const app = express();
const server = createServer(app);
const port = process.env.SERVER_PORT;
const route = require("./api/routes");

app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(
  cors({
    origin: ["http://localhost:8080", "http://127.0.0.1:8080"],
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

route(app);

// Start the server
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
