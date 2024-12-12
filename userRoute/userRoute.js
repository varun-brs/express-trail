import express from "express";
import {
  createUser,
  getProfile,
  updateProfile,
  deleteProfile,
} from "../userController/userController.js";

const route = express.Router();

route.post("/", createUser);
route.get("/:userId", getProfile);
route.put("/:userId", updateProfile);
route.delete("/:userId", deleteProfile);

export default route;
