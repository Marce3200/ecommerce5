const express = require("express");
const router = express.Router();

const { findAll, findOne, signup, signIn } = require("../controllers/user.controller");

router.get("/all", findAll);
router.post("/signup", signup);
router.get("/one", findOne);
router.post("signin", signIn);

module.exports = router;