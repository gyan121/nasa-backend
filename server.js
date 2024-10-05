const express = require("express");
require("dotenv").config();
const { getApod, getRover } = require("./controller");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/api/apdo", getApod);
app.get("/api/rover", getRover);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
