const express = require("express");
const { Login, Register, setFav, getFav, getHistory, addHistory } = require("../Controller/UserController");
const UserRouter = express.Router();

// UserRouter.get("/Login",Login)
UserRouter.post("/Register",Register)



module.exports = UserRouter;