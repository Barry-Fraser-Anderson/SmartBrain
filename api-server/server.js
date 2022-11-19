import express from "express";
import cors from "cors";
import handleRegister from "./controllers/register.js";
import handleSignin from "./controllers/signin.js";
import handleProfileGet from "./controllers/profile.js";
import handleImage, { handleApiCall } from "./controllers/image.js";

//TODO: dummy users to be replaced with a real DB
const database = {
  users: [
    {
      id: "123",
      name: "John",
      email: "john@gmail.com",
      password: "cookies",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "124",
      name: "Sally",
      email: "sally@gmail.com",
      password: "bananas",
      entries: 0,
      joined: new Date(),
    },
  ],
};

const app = express();
app.use(express.json());
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send(database.users);
});
app.post("/signin", (req, res) => handleSignin(req, res, database));
app.post("/register", (req, res) => handleRegister(req, res, database));
app.get("/profile/:id", (req, res) => handleProfileGet(req, res, database));
app.put("/image/:id", (req, res) => handleImage(req, res, database));
app.put("/imageurl", (req, res) => handleApiCall(req, res, database));

//
app.listen(3000, () => {
  console.log("app is running on port 3000");
});
