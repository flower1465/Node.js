const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const routes = require("./routes");

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/", routes);

app.listen(PORT, () => {
  console.log(PORT, "번 포트에서 대기 중");
});
