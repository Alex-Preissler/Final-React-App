const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {

    Create: function(req, res){
        
        console.log(req.body);
		let password = req.body.password;

		bcrypt.hash(password, 10, (err, hash) => {
			
			if(err){
				console.log(err);
				console.log(req.body);
				return res.status(422).json(err);
			} 

			req.body.password = hash;
			db.User
				.create(req.body)
				.then(dbModel => res.json(dbModel))
				.catch(err => {
					console.log(err);
					res.status(422).json(err)
				});
    	});
	}
}