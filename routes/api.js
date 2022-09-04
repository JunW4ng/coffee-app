const { Router } = require("express");
const router = Router();

const {
  getAllEmployees,
  getAllProduct,
  postEmployee,
  deleteEmployee,
} = require("../db");

router.get("/all-employees", async (_req, res) => {
  await getAllEmployees()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

router.get("/all-products", async (_req, res) => {
  await getAllProduct()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

router.get("/create-employee", async (req, res) => {
  const { email, password, nameEmployee } = req.query;

  await postEmployee(email, password, nameEmployee)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

router.get("/delete-employee", async (req, res) => {
  const { email } = req.query;

  await deleteEmployee(email)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

module.exports = router;
