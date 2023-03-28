const express = require("express");
require("./Database/connect");
const todoroute = require("./Routes/Todoroutes");
const userroute = require("./Routes/userroutes");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

app.use("/todorouting", todoroute);
app.use("/userrouting", userroute);

const port = process.env.port || 4000;
app.listen(port, () => {
  console.log("server on listen dans le port " + port);
});
