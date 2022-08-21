const { Router } = require("express");
const router = Router();

const { getEmployee } = require("../db");

router.get("/employee", (_req, res) => {
    getEmployee()
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  });


module.exports = router;
