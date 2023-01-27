const express = require("express");
const router = express.Router();

const { findAll, findOne, signup, signIn } = require("../controllers/user.controller");
const auth = require("../auth/auth");


router.get("/all", auth,  findAll);
router.post("/signup", signup);
router.get("/one",auth,  findOne);
router.post("/signin", signIn);

module.exports = router;