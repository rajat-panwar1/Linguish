const express = require("express");
const router = express.Router();

// Load Controllers
const {
  registerController,
  activationController,
  signinController,
  forgotPasswordController,
  resetPasswordController,
  googleController,
} = require("../controllers/auth.controller");

const {
  validSign,
  validLogin,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../helpers/valid");

router.post("/register", validSign, registerController);

router.post("/login", validLogin, signinController);

router.post("/activation", activationController);

// forgot reset password
router.put(
  "/forgotpassword",
  forgotPasswordValidator,
  forgotPasswordController
);
router.put("/resetpassword", resetPasswordValidator, resetPasswordController);

// Google
router.post("/googlelogin", googleController);
module.exports = router;
