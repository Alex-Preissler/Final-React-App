import axios from "axios";

export default {

	User: JSON.parse(sessionStorage.getItem("usr")),

	Create: function(newItem) {	
		
		const { listDate, listName } = newItem;
		const request = {
			_id: this.User._id,
			listDate: listDate,
			listName: listName
		}
		console.log(request);
		return axios.post("/api/cleaning", request);
	
	},
	CreateSublist: function(newSublist) {
		return axios.post("/api/create/sublist", newSublist)	
	},
	CreateItem: function(newItem) {
		return axios.post("/api/create/item", newItem);
	},
	ReadListIds: function() {

		return axios.get("/api/user/cleaning/" + this.User._id);

	},
	ReadListInfo: function(id) {
		console.log(id);
		const sendId = JSON.stringify(id)
		console.log(sendId)

		return axios.get("/api/cleaning/" + sendId);
	},
	ReadListItems: function(id) {
		const sendId = JSON.stringify(id)
		return axios.get("/api/cleaning/sublists/" + sendId);
	},
	Update: function() {


	},
	Delete: function(id) {
		
		console.log(id);

		return axios.delete("/api/cleaning/" + id);


	}

}