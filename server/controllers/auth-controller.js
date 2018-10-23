const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {

	Login: function(req, res) {
		console.log(req.body);
		db.User.findOne({ email: req.body.email })
			.then(user => {
				console.log(user);
				bcrypt.compare(req.body.password, user.password)
					.then(match => {

						if(match) {
							res.status(200).json(user);
						}else{
							res.status(401).send("Invalid Password.");
						}
					})
					.catch(err => {
						res.status(500);
					})
			})
			.catch(err => res.status(404).send("User Not Found."));
		}		
}