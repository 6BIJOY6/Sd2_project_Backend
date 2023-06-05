const express = require("express");
const { registerController,      loginController, 
  testController, 
  forgotPasswordController } = require("../controllers/authController");
const { requireSignIn, isAdmin } = require("../middlewares/authmiddleware");


// router object
const router = express.Router();

// routing
// Register - Method post
router.post("/register", registerController);

// Login - Method post
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test
router.get("/test" ,requireSignIn,isAdmin,   testController);

//protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});



module.exports = router;
