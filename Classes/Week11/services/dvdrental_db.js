const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dvdrental",
  password: "leafsfan12",
  port: 5432,
});
module.exports = pool;
