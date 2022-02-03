const authRouter = require("express").Router();
const { register, login, forgot, getProfile } = require("../controller/auth");
const { checkToken } = require("../middlewares/JWT");

authRouter.post("/signup", register);
authRouter.post("/login", login);
authRouter.post("/forgot", forgot);
authRouter.get("/profile", checkToken, getProfile);

module.exports = authRouter;
