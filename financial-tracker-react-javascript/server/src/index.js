require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const financialRecordRouter = require("./routes/financial-records");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI = (process.env.MONGO_URL);

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
