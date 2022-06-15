const Usuario = require('../../models/Usuario');
const bcrypt = require('bcryptjs');

module.exports = (req, res, next) => {
    let usuario = req.body.nomeusuario;
    let senha  = req.body.senha;

    let user = Usuario.findOne({username: usuario}).exec();
    user.then((doc) => {
        if(doc){
            if(bcrypt.compareSync(senha, doc.senha)){
                req.user = doc;
                next();
            }else{
                return res.json({autorizado: false});
            }
        }else{
            return res.json({autorizado: false});
        }
    });
}