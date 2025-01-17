"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
userRouter.get("/", (_, res) => {
    res.json({
        message: "Healthy userRouter",
    });
});
exports.default = userRouter;
