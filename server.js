require("dotenv").config();
const express = require("express");
const { engine } = require("express-handlebars");

const authentication = require("./src/authentication");
const front = require("./routes/front");
const api = require('./routes/api')

const port = process.env.PORT || 5000;
const app = express();

app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/components",
  })
);

app.use(express.static("public"));
app.use("/js", express.static(__dirname + "/assets/js"));

app.use(front);
app.use(api);
app.use(authentication);

app.listen(port, () => console.log(`Escuchando puerto ${port}`));
