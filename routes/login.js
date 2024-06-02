var express = require("express");
var router = express.Router();

router.use((req, res, next) => {
  console.log("Middleware no Router");
  next();
});

router.get("/login", (req, res) => {
  console.log("Página de login");
});
router.get("/logout", (req, res) => {
  console.log("Desconectado com sucesso");
});
router.get("/forgot-password", (req, res) => {
  console.log("Esqueci a senha");
});

module.exports = router;
