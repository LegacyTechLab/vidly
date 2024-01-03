const express = require("express");
const genreRouter = express.Router();
const genreController = require("../controllers/genre");
const {validateGenre} = require("../middlewares/validation");

genreRouter.get("/api/genres", genreController.getGenres);
genreRouter.get("/api/genres/:id",genreController.getGenre);
genreRouter.post("/api/genres", validateGenre, genreController.createGenre);
genreRouter.put("/api/genres/:id",validateGenre, genreController.updateGenre);
genreRouter.delete("/api/genres/:id", genreController.deleteGenre);

module.exports = genreRouter