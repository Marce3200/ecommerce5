const { expressjwt: jwt} = requiere("express-jwt") //esa libreria le permite a express saber que va a llegar token 

require("dotenv").config();

const getToken = (req) =>{ //este metodo extrae el token de la cabecera
     let {authorisation} = req.headers;
     if (authorisation) {
        let [type, token] = authorisation.split(" "); // extrae los datos de la cadena y los divide en dos
        return (type === 'Token' || type === "Bearer") ? token : null; // si el type es token o bearer deveu;ve algo.
     }
     return null;
}

const auth = jwt({ // este metodo retorna el string del token. se le especifica el secreto, el algorith y el user property
    secret: process.env.SECRET,
    algorithms: [HS256],
    userProperty: "user"
});

module.export = auth;
