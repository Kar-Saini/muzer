import express from "express";
import userRouter from "./router/user";
import spaceRouter from "./router/space";

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.json({ message: "Healthy server" });
});

app.use("/user", userRouter);
app.use("/space", spaceRouter);

export default app;
