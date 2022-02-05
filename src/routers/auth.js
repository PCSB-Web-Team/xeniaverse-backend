const authRouter = require("express").Router();
const {
  register,
  login,
  forgotLink,
  getProfile,
  passReset,
} = require("../controller/auth");
const { checkToken } = require("../middlewares/JWT");

authRouter.post("/signup", register);
authRouter.post("/login", login);
authRouter.get("/profile", checkToken, getProfile);
authRouter.post("/forgot", forgotLink);
// authRouter.get("/reset/:id/:token");
authRouter.post("/reset/:id/:token", passReset);

module.exports = authRouter;
