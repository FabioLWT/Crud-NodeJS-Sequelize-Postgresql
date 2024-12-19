const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Bem-Vindo a Neo Quimica Arena!!!!" });
});

module.exports = routes;
