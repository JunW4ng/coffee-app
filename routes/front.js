const { Router } = require("express");

const router = Router();

router.get("/", (_req, res) => {
  res.send(__dirname + "index.html");
});

module.exports = router;
