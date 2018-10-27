const userController = require("./user-controller");
const authController = require("./auth-controller");
const cleanController = require("./cleaning-controller");

const control = {
	User: userController,
	Auth: authController,
	Clean: cleanController
}

module.exports = control;