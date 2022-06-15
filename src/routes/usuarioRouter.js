const usuarioRouter = require('express').Router();

const cadastrarUsuario = require('../controllers/usuario/cadastrarUsuario');
const ativarUsuario = require('../controllers/usuario/ativarUsuario');

//middlewares
const emailCheck = require('../middlewares/cadastro/emailCheck');
const usernameCheck = require('../middlewares/cadastro/usernameCheck');

usuarioRouter.post('/cadastrarUsuario', emailCheck, usernameCheck, cadastrarUsuario);
usuarioRouter.get('/ativar/:chave', ativarUsuario);

module.exports = usuarioRouter;