import express from "express";
const app = express();

const personRoute = require("./Person");

app.use("", personRoute);

module.exports = app;
