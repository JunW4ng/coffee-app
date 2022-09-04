require("dotenv").config();
const { Router } = require("express");
const jwt = require("jsonwebtoken");

const { getAdmin, getEmployee, getAllEmployees, getAllProduct } = require("../db");

const router = Router();

const getToken = (user) => {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 120,
      data: user,
    },
    process.env.JWT_SECRET
  );

  return token;
};

router.get("/SignIn", async (req, res) => {
  const { email, password } = req.query;

  const admin = await getAdmin(email, password);
  const employee = await getEmployee(email, password);

  if (employee.length > 0 && admin.length < 1) {
    const token = getToken(employee);

    const products = await getAllProduct()

    res.render("dashboard", { token, employee, products });
  } else if (employee.length < 1 && admin.length > 0) {
    const token = getToken(admin);

    const employees = await getAllEmployees()

    res.render("adminDashboard", { token, admin, employees });
  } else {
    res.render("alertIndex")
  }
});

module.exports = router;
