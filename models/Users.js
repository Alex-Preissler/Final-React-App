const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		trim: true,
		required: "Name is required"
	},
	lastName: {
		type: String,
		trim: true,
		required: "Last name is required"
	},
	email: {
		type: String,
		trim: true,
		unique: "Email already exists",
		match: [/.+\@.+\..+/, 'Please fill a valid email address'],
		required: "Email is required"
	},
	phone: {
		type: String,
		unique: true,
		required: false
	},
	username: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: "Password is required."
	},
	cleaning: [{
		type: Schema.Types.ObjectId,
		ref: "CleanList"
	}],
	updated: Date,
	created: {
		type: Date,
		default: Date.now
	}
})

UserSchema.methods = {
	authenticate: function (plainText) {
		bcrypt.compare(plainText, hash).then((res) => {
			return (res);
		});
	}
}

module.exports = mongoose.model("User", UserSchema);