const express = require("express");
const app = express();
const apiRouter = require("./routers/api-router");
// const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

module.exports = app;
