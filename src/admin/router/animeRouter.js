const animeRouter = require('express').Router();

const cadastrarAnime = require('../controllers/anime/cadastrarAnime');
const listarAnime = require('../controllers/anime/listarAnime');
const addGeneros = require('../controllers/anime/addGeneros');

animeRouter.post('/cadastrarAnime', cadastrarAnime, addGeneros);
animeRouter.post('/listarAnime', listarAnime);

module.exports = animeRouter;