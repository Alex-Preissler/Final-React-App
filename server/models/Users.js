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

UserSchema
	.virtual("password")
	.set(function(password) {
		this._password = password;
		bcrypt.genSalt(10, function(err, salt) {
			this.salt = salt;
			bcrypt.hash(password, salt, function(err, hash) {
				this.hashed_password = hash;
			}).catch(function(err) {
				console.log(err);
			})
		}).catch(function(err){
			console.log(err);
		})
	})
	.get(function() {
		return this._password
	})

UserSchema.path("hashed_password").validate(function() {
	if (this._password && this._password.length < 8) {
		this.invalidate("password", "Password must be at least 8 characters.");
	}
	if (this.isNew && !this._password) {
		this.invalidate("password", "Password is required");
	}
}, null)

UserSchema.methods = {
	authenticate: function(plainText) {
		bcrypt.compare(plainText, hash).then((res) => {
			return(res);
		});
	}
}

module.exports = mongoose.model("User", UserSchema);