const userController = require("./user-controller");
const authController = require("./auth-controller");

const control = {
	User: userController,
	Auth: authController
}

module.exports = control;