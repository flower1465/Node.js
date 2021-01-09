const router = require("express").Router();
const user = require("./user");
const post = require("./post");
//const email = require("./email");
const middleware = require("../middleware/token");

router.use("/user", user);
router.use("/post", post);
//router.use("/email", email);

module.exports = router;
