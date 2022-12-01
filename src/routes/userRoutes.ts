import { Router } from "express";
import { loginController } from "../controllers/user_controllers/loginController.js";
import { userRegistrationController } from "../controllers/user_controllers/userRegistrationController.js";
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware.js";
import { loginUserMiddleware } from "../middlewares/loginUserMiddleware.js";

const userRouter = Router({ caseSensitive: true });

userRouter
  .post("/user", userRegistrationController)
  .post("/login", loginUserMiddleware, loginController)
  .get("/t", authorizationMiddleware, async (req, res) => {
    return res.status(200).json({ msg: req.params.userId });
  });

export { userRouter };
