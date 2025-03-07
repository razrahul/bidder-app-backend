//root file (server ceated here)
const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//server listen
const PORT = process.env.PORT || 3001;
app.listen(3001, () => {
  try {
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log("Error", error.message);
  }
});
