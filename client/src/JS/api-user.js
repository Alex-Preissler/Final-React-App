import axios from "axios";

export default {

	Create: function(user) {	

		console.log(user);
		return axios.post("/api/user/create", user);
	
	}

}


  
