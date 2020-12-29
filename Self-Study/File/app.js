const express = require("express");

const app = express();

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(PORT, "번 포트에서 대기 중");
});
