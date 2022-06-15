const Usuario = require('../../models/Usuario');

module.exports = (req, res, next) => {
    let email = req.body.email;

    email = email.split('@');
    if(email.length !== 2){
        return res.send({cadastro: false, msg: "E-Mail inválido.", erros: null});
    }
    if(email[1] === "gmail.com" || email[1] === "outlook.com" || email[1] === "hotmail.com" || email[1] === "icloud.com"){
        email = email[0] + '@' + email[1];
    }else{
        return res.send({cadastro: false, msg: "E-Mails permitidos: Google, Microsoft, Apple." +
                "<br/>exemplo@gmail.com<br/>exemplo@hotmail.com<br/>exemplo@outlook.com<br/>exemplo@icloud.com", erros: null});
    }

    Usuario.findOne({email: email}, (err, value) => {
        if(value){
            return res.send({cadastro: false, msg: "E-Mail já está em uso."});
        }else{
            req.email = email;
            next();
        }
    });
}