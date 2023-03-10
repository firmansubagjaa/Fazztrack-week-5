// mendeklarasikan
// mendeklarasikan bodyparse, dan json
const { urlencoded, json } = require("express");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;

//menghubungkan connection.js
// const db = require("./helper/connection");
const router = require("./src/routes/index");
// const { v4: uuidv4 } = require("uuid");

app.use(urlencoded({ extended: true }));
//menerima json
app.use(json());
//menerima cors
app.use(cors());
//menerima router
app.use("/api/v1", router);
app.get("*", (req, res) => {
  return res.json({
    status: 404,
    message: "Not ada",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
