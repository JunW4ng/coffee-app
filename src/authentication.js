const { Router } = require("express");
const jwt = require("jsonwebtoken");

const router = Router();

const getToken = (user) => {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 120,
      data: user,
    },
    secretKey
  );

  return token;
};

const getUserInterface = (email, token) => {
  const interface = `
  ${email}
  <a href="/Secret?token=${token}"> <p> Ruta Restringida </p> </a>
  <script>
  localStorage.setItem('token', JSON.stringify("${token}"))
  </script>
  `
  return interface
}

router.get("/SignIn", (req, res) => {
  const { email, password } = req.query;

  const user = users.results.find(
    (user) => user.email.includes(email) && user.password.includes(password)
  );

  if (user) {
    const token = getToken(user);
    const interface = getUserInterface(email, token)

    res.send(interface);
  }

  res.send("Usuario o contrasena incorrecta");
});

module.exports = router;
