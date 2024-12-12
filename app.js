import express from "express";
import route from "./userRoute/userRoute.js";
import connectDB from "./config/db.js";
const PORT = 5000;

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/users", route);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "Not found",
    statusCode: 404,
  });
});

app.listen(PORT, console.log("server running on port 5000"));
