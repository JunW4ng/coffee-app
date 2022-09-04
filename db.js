require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

pool.connect(function (error) {
  if (error) throw error;
  console.log("Postgres Connected!");
});

const getAdmin = async (email, password) => {
  const getAdminQuery = {
    text: `SELECT * FROM admin_local WHERE email = $1 AND password = $2`,
    values: [email, password],
  };
  try {
    const result = await pool.query(getAdminQuery);
    return result.rows;
  } catch (err) {
    return err.code;
  }
};

const getEmployee = async (email, password) => {
  const getEmployeeQuery = {
    text: `SELECT * FROM empleado WHERE email = $1 AND password = $2`,
    values: [email, password],
  };
  try {
    const result = await pool.query(getEmployeeQuery);
    return result.rows;
  } catch (err) {
    return err.code;
  }
};

const getAllEmployees = async () => {
  const sqlQuery = "SELECT * FROM empleado";
  try {
    const result = await pool.query(sqlQuery);
    return result.rows;
  } catch (err) {
    return err.code;
  }
};

const getAllProduct = async () => {
  const sqlQuery = "SELECT * FROM product";
  try {
    const result = await pool.query(sqlQuery);
    return result.rows;
  } catch (err) {
    return err.code;
  }
};

const postEmployee = async (email, password, nameEmployee) => {
  const sqlQuery = {
    text: `INSERT INTO empleado (email, password, nombre) VALUES ($1, $2, $3) RETURNING *`,
    values: [email, password, nameEmployee],
  };
  try {
    const result = await pool.query(sqlQuery);
    return result.rows;
  } catch (err) {
    console.log(err);
    return err.code;
  }
};

const deleteEmployee = async (email) => {
  const sqlQuery = {
    text: "DELETE FROM empleado WHERE email = $1 RETURNING*",
    values: [email]
  };
  try {
    const result = await pool.query(sqlQuery);
    return result.rowCount;
  } catch (err) {
    return err.code;
  }
};

module.exports = {
  getAdmin,
  getAllEmployees,
  getEmployee,
  getAllProduct,
  postEmployee,
  deleteEmployee,
};
