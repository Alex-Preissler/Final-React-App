import API from "../JS/api-auth";

export default {

	isAuthenticated: false,
	
	Authenticate: function(user, res) {

		console.log(user);

		API.Login(user)
			.then(response => {
				let username = response.data.username;

				console.log(response);
				sessionStorage.setItem("usr", JSON.stringify(response.data))
				this.checkIsAuthenticated();
				res(username);
			})
			.catch(err => {
				res(err);
			});


	},

	checkIsAuthenticated: function() {

		if(sessionStorage.getItem("usr")){
			this.isAuthenticated = true;
		}else{
			this.isAuthenticated = false;
		}
	},

	Signout: function(res) {
		this.isAuthenticated = false;
		sessionStorage.removeItem("usr");
		res(true);
	}
}
