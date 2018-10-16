const config = {
	env: process.env.NODE_ENV || "development",
	PORT: process.env.PORT || 3001,
	MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/plannerdb"
}

module.exports = config;