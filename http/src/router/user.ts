import { Router } from "express";

const userRouter = Router();
userRouter.get("/", (_, res) => {
  res.json({
    message: "Healthy userRouter",
  });
});

export default userRouter;
