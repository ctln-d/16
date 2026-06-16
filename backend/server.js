require("dotenv").config();
require("./config/db");
const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001

// auth
const UserRouter = require("./api/user");
app.use("/user", UserRouter);

app.use(express.static(path.join(__dirname, '../frontend/dist')));

// any route that isn't an API route sends the frontend
app.get('/{*path}', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});