require('dotenv-safe').config();
const jwt = require('jsonwebtoken');
const Usuario = require('../../models/Usuario');
const Admin = require('../../models/Admin');

module.exports.eAutorizado = (req, res) => {
    const token = req.headers['x-access-token'];
    if(!token){
        return res.send({auth: false});
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if(err) return res.send({auth: false});
        else{
            //let chave = decoded.chave;
            //let novoToken = jwt.sign({chave: chave}, process.env.SECRET, {
                //expiresIn: '1h'
            //});
            let user = Usuario.findOne({chave: decoded.chave}).exec();
            user.then((doc) => {
                if(doc){
                    res.json({auth: true, user: doc});
                }else{
                    return res.send({auth: false});
                }
            });
        }
    });
};