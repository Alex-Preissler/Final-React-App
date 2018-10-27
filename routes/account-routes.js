const router = require("express").Router();
const control = require("../controllers/index");
		
router.route("/api/user/create")
	.post(control.User.Create);

router.route("/api/cleaning")
	.post(control.Clean.Create)
	.delete(control.Clean.Delete);

router.route("/api/cleaning/:id")
	.get(control.Clean.GetList)
	.delete(control.Clean.Delete)

router.route("/api/create/sublist")
	.post(control.Clean.CreateSublist)

router.route("/api/create/item")
	.post(control.Clean.CreateItem)

router.route("/api/cleaning/sublists/:id")
	.get(control.Clean.GetItems)

router.route("/api/user/cleaning/:id")
	.get(control.Clean.Get)
	
module.exports = router;