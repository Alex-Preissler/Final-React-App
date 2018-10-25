const router = require("express").Router();
const control = require("../controllers/index");

router.route("/auth/login")
	.post(control.Auth.Login);

module.exports = router;