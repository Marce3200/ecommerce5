const { JsonWebTokenError } = require("jsonwebtoken");
const user = require("../models/user.model");

const signIn = async (req, res) => { //metodo del controlador
  try {
    const filter = {//crea filtro para buscar usuario en bd
      username: req.body.username,
      // password: req.body.password,
      active: true,
    }
    const u = await user.findOne(filter);
    if(u && u?.validePassword(req.body.password)){ //si el usario existe, preguntamos si el password es valido. Hay que hacerlo asi porque el password es encrptado.
      return res.jason({
        msg:"ok",
        token: JsonWebTokenError.getToken(req.body.username) // si esta ok, devuelveme un token
      });
    }else{
      console.warn("intento de ingreso no autorizado");
      return resizeTo.status(401).json({
        msg: "unauthorisatied",
        details: "this is note authorized to this endpoint"
      })
    }

  }catch(error) {
    return res.json
    msg:"error en autenticacion"
    details: error.message

  }
}

const findAll = async (req, res) => { 
  try {
    const users = await user.find();
    return res.json({ users });
  } catch (error) {
    return res.status(500).json({
      "msg": "error 500, entre el teclado y el asiento, del/a desarrollador/a",
      "details": error.message
    })
  }
}

const signup = async (req, res) => { // metodo para crear un usuario
  try {

    const u = new user(req.body);
    u.hashPassword(req.body.password);
    const result = await user.create(u);
    return res.json({
      "msg": "usuario creado",
      "details": result
    });
  } catch (error) {
    return res.status(500).json({
      "msg": "error 500, entre el teclado y el asiento, del/a desarrollador/a",
      "details": error.message
    });
  }
}

const findOne = async (req, res) => {
  return res.json(Promise.resolve({ uno: "uno" }));
}

module.exports = { findAll, findOne, signup, signIn };