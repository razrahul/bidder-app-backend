//root file (server ceated here)
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const sequelize = require("./src/config/dbConnect");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//server listen
const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  try {
    console.log(`Server is running on port ${PORT}`);
    //db connection check
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Error", error.message);
  }
});
