const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const UserRoutes = require("./routes/UserRoutes");

const { notFound, errorHandler } = require("./error/ErrorMessage");

const app = express();
dotenv.config();
connectDB();

app.use(express.json()); //to accept json data

app.get("/", (req, res) => {
  res.send("API is running Successfully");
});

app.use("/api/user", UserRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server Started on PORT ${PORT}`));
