import { Router } from "express";
import { userRegistrationController } from "../controllers/user_controllers/userRegistrationController.js";

const userRouter = Router({ caseSensitive: true });

userRouter.post("/user", userRegistrationController);

export { userRouter };
