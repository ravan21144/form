const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.PUSER,
  port: process.env.PPORT,
  password: process.env.PPASSWORD,
  database: process.env.PDATABASE,
  host: process.env.PHOST,
});
module.exports = {
  query: async (text, params) => await pool.query(text, params),
};
