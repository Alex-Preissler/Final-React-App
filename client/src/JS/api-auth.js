import axios from "axios";

export default {

	Login: function(user) {
		console.log(user);
		return axios.post("/auth/login", user);
	},

	Signout: function(user) {
		
	}
}
  