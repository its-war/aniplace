const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://itswar:<27652765>@aniplace.a7rjwww.mongodb.net/?retryWrites=true&w=majority').then(() => {
    //console.log("Conectou");
//mongodb://localhost/aniplace
    //mongoose.connection.db.dropDatabase();
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;

/*
# Modelo de como salvar no mongoDB (campos com 'default' podem ser ignorados aqui)

let user = mongoose.model('usuario');
new user({
    nome: "Teste2",
    email: "teste2@teste.com",
    username: "teste2",
    senha: "123",
    chave: "hh1232",
    registro: "hoje"
}).save().then(() => {console.log("Cadastrou");}).catch((err) => {console.log("Erro: " + err)});
 */