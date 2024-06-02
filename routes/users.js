var express = require("express");
var router = express.Router();

let professores = [];

router.get("/", function (req, res, next) {
  res.render("professores", { title: "Lista de professores", professores });
});

router.get("/cadastro", function (req, res, next) {
  res.render("cadastro-professor", { title: "Cadastro de professores" });
});

router.post("/cadastro", function (req, res, next) {
  const { nome, disciplina } = req.body;
  const professor = { nome, disciplina };
  professores.push(professor);
  res.redirect("/users");
});

router.get('/usuario/:usuarioId/professor/:professorId', (req,res) => {
  res.send(req.params);
})

router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  // res.render("professores", { title: "Lista de professores", professores });
  res.status(200).send(res)
  res.status(404).send("Usuário não encontrado.")
});





// router.update("/", function (req, res, next) {
//   res.send("professores", {});
// });

router.delete("/", function (req, res, next) {
  res.send("professores", {});
});

module.exports = router;
