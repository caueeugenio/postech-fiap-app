var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/login");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log(`${new Date().toLocaleString()} - ${req.method} ${req.url}`);
  next();
});

app.use(function (req, res, next) {
  console.log(`${new Date().toLocaleString()} - ${req.method} ${req.url}`);
  next();
});

/**
// app.use("/", indexRouter);
// app.use("/users", usersRouter);

app.use((err, req, res, next) {
  console.log(err.stack);
  res.status(500).send(`Algo deu errado.);
});

app.use(function (req, res, next) {
  console.log(`${new Date().toLocaleString()} - ${req.method} ${req.url}`);
  next();
});

const verificaAutenticacao = (req, res, next) => {
  if (req.headers["authorization"] === "token_de_autenticacao") {
    next();
  } else {
    res.status(401).send("Não autorizado");
  }
};

app.get("/restrito", verificaAutenticacao, (req, res) => {
  res.send("Conteúdo restrito");
});
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3001, () => {
  console.log("Servidor ouvindo na porta 3000.");
});
 */

module.exports = app;
