const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Auth",
  password: "leafsfan12",
  port: 5432,
});
module.exports = pool;
