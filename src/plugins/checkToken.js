require('dotenv-safe').config();
const jwt = require('jsonwebtoken');

const verify = {
    check: async function(token){
        await jwt.verify(token, process.env.SECRET, (err, decoded) => {
            return !!err;
        });
    }
}

module.exports = verify;