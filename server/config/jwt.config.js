const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

//Credenciales de seguridad primero logearse para poder el aplicativo
//autorización comprobar si tenemos la cookie
//si la tenemos autoriza sino no autoriza
const authenticate = (req, res, next) => {
    //para saber la cookie userToken (demostrativo)
    console.log({cookies:req.cookies.userToken});
    jwt.verify(req.cookies.usertoken, secretKey, (err,payload) =>{
        if(err){
            //401 => unauthorized sino se encuentra la cookie reporta un 401
            res.status(401).json({verified: false, message: "You logged in incorrectly"})
        } else { //si se encuentra no hace nada solo salta el paso
            next();
        }
    })
}

module.exports = {secretKey, authenticate};