const { Router } = require("express");

const router = Router();

router.get("/", (_req, res) => {
  res.send(__dirname + "index.html");
});

router.get("/alert", (_req, res) => {
  res.send(__dirname + "alertIndex.html");
});

module.exports = router;
