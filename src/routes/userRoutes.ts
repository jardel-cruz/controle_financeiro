import { Router } from "express";
import { loginController } from "../controllers/user_controllers/loginController.js";
import { userRegistrationController } from "../controllers/user_controllers/userRegistrationController.js";
import { loginUserMiddleware } from "../middlewares/loginUserMiddleware.js";

const userRouter = Router({ caseSensitive: true });

userRouter
  .post("/user", userRegistrationController)
  .post("/login", loginUserMiddleware, loginController);

export { userRouter };
