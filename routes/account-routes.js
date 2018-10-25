const router = require("express").Router();
const control = require("../Controllers/index");
		
router.route("/api/user/create")
	.post(control.User.Create);

	
module.exports = router;