const { Router } = require("express");
const router = Router();

const { getAllEmployees, postOrder } = require("../db");

router.get("/all-employees", async (_req, res) => {
  await getAllEmployees()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

router.get("/store-order", async (req, res) => {
  await postOrder()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

module.exports = router;
