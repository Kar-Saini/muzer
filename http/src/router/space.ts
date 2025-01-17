import { Router } from "express";

const spaceRouter = Router();

spaceRouter.get("/", (_, res) => {
  res.json({ message: "Healthy spaceRouter" });
});
export default spaceRouter;
