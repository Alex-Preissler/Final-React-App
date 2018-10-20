const mongoose = require("mongoose");
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
		type: Number,
		unique: true,
		required: false
	},
	username: {
		type: String,
		unique: true,
		required: true
	},
	hashed_password: {
		type: String,
		required: "Password is required."
	},
	salt: String,
	updated: Date,
	created: {
		type: Date,
		default: Date.now
	}
})

UserSchema.pre()
	.virtual("password")
	.set(function (password) {
		console.log(password);
		this._password = password;
		bcrypt.hash(password, 10, (err, hash) => {
			console.log(hash);
			this.hashed_password = hash;
		})
	})
	.get(function () {
		return this._password
	})

UserSchema.path("hashed_password").validate(function (v) {
	if (this._password && this._password.length < 8) {
		this.invalidate("password", "Password must be at least 8 characters.");
	}
	if (this.isNew && !this._password) {
		this.invalidate("password", "Password is required");
	}
}, null)

UserSchema.methods = {
	authenticate: function (plainText) {
		bcrypt.compare(plainText, hash).then((res) => {
			return (res);
		});
	}
}

module.exports = mongoose.model("User", UserSchema);