import bodyParser from "body-parser";
import express from "express";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const routes = require("./api/v1/routes/Index");

app.use("/", routes);

app.listen(3000, () => {
  console.log("Typescript server is running!");
});
