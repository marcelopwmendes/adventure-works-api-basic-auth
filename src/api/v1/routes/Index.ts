import express from "express";
const app = express();

const personRoute = require("./PersonRoute");

app.use("", personRoute);

module.exports = app;
