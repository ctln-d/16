require("dotenv").config();
require("./config/db");
const path = require("path");
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001

// auth
const UserRouter = require("./api/user");
app.use("/user", UserRouter);
