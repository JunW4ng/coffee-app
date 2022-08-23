require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect(function (error) {
  if (error) throw error;
  console.log("Connected!");
});

const getEmployee = async () => {
  const sqlQuery = "SELECT * FROM empleado";
  try {
    const result = await pool.query(sqlQuery);
    console.log(result.rows);
    return result.rows;
  } catch (err) {
    return err.code;
  }
};

module.exports = { getEmployee };
