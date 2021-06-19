import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "1234",
  database: "pernstack",
  port: 5432,
});

export default pool;
