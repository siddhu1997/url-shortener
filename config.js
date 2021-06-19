const dotenv = require("dotenv")

dotenv.config()

module.exports = {
    dbPassword: process.env.DATABASE_PASSWORD,
    dbURL: process.env.DATABASE_URL,
    dbUser: process.env.DATABASE_USER,
    secret: process.env.JWT_SECRET
}