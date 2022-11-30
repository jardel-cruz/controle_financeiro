import { Router } from "express";

const userRouter = Router({ caseSensitive: true });

userRouter.post("/user");

export { userRouter };
