const router = require("express").Router();
const email = require("./email");

router.use("/email", email);

module.exports = router;
