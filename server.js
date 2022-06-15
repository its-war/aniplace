//Importações Principais
const express = require('express');
const app = express();
const cors = require('cors');
const path = require("path");
const bodyParser = require('body-parser');
const datahora = require('./src/plugins/datahora');

//Configurações
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

//Importações de Roteadores
const adminRouter = require('./src/routes/adminRouter');
const adminMiddleware = require('./src/middlewares/adminLoginMiddleware');
const loginRouter = require('./src/routes/loginRouter');
const usuarioRouter = require('./src/routes/usuarioRouter');
const destaqueRouter = require('./src/routes/destaqueRouter');
const rankRouter = require('./src/routes/rankRouter');
const porta = process.env.PORT || 80;

//Rotas Principais
app.use('/admin', adminMiddleware, adminRouter);
app.use('/login', loginRouter);
app.use('/usuario', usuarioRouter);
app.use('/destaque', destaqueRouter);
app.use('/ranking', rankRouter);
app.get("/", function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});
app.get("*", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(porta, () => {
    console.log("Servidor iniciado na porta " + porta + " em " + datahora.getData() + " às " + datahora.getHora());
});

// TODO sempre que for upar o projeto, não esqueça de atualizar os arquivos mail.js

// TODO criar um middleware para verificar o token em todas as rotas

// TODO terminar script dos destaques ------------------------ <<<<<<<<<<<<<<

// TODO criar rotas de 'anime'
