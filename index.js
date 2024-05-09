const express = require("express");
const cors = require("cors");
require("./db/connect");
const clients = require("./db/model1");
const app = express();
app.use(express.json());
app.use(cors());
//vipin yadav api
app.get("/users123", async (req, res) => {
  let da = await clients.find({}, { _id: 0 });
  res.send(da);
});
app.listen(5002, () => {
  console.log("server is running");
});
