const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CleaningSchema = new Schema({
	listDate: Date,
	listName: String,
	sublist: [{
		type: Schema.Types.ObjectId,
		ref: "CleanItem"
	}]
});

const CleaningList = mongoose.model("CleanList", CleaningSchema);

module.exports = CleaningList;