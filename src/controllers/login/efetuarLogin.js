require('dotenv-safe').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    const tokenReq = req.headers['x-access-token'];

    jwt.verify(tokenReq, process.env.SECRET, (err, decoded) => {
        if(!err){
            return res.sendStatus(401);
        }
    });
    const token = jwt.sign({chave: req.user.chave}, process.env.SECRET, {
        expiresIn: '1h'
    });
    req.headers['x-access-token'] = token;
    return res.json({autorizado: true, token: token, user: {
            id: req.user._id,
            nome: req.user.nome,
            foto: req.user.foto
    }});
};