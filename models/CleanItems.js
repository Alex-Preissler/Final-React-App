const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CleanItemSchema = new Schema({
	title: String,
	items: [{
		listItem: String,
		checked: {
			type: Boolean,
			default: false
		}
	}]
});

const CleanItems = mongoose.model("CleanItem", CleanItemSchema);

module.exports = CleanItems;