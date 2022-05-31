import express from "express";
const app = express();

const routes = require("./routes/index");

app.use("/", routes);

app.listen(3000, () => {
  console.log("Typescript server is running!");
});
