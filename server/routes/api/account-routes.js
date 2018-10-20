module.exports = function(app, db) {

	app.post("/api/user/create", function(req, res) {

		console.log(req);

		db.User.create(req.body)
			.then(result => {
				res.json(result);
			})
			.catch(err => {
				return res.json(err);
			});
	});

	
}