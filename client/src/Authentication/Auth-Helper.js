import API from "../JS/api-auth";

export default {
	
	isAuthenticated: false,	
	_id: null,
	
	Authenticate: function(user, res) {

		console.log(user);

		API.Login(user)
			.then(response => {
				this.isAuthenticated = true;
				this._id = response._id;
				console.log(response);
				res(this.isAuthenticated);
			})
			.catch(err => {
				res(err);
			});


	},

	Signout: function(res) {
		this.isAuthenticated = false;
		this._id = null;
		res(true);
	}
}
