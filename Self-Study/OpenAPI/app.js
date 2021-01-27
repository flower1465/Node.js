const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8008;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(PORT, () => {
  console.log(PORT, "번 포트에서 대기 중");
});
