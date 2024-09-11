require("dotenv").config();
module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  MAX_LIMIT: process.env.MAX_LIMIT,
};
