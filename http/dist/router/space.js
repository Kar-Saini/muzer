"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const spaceRouter = (0, express_1.Router)();
spaceRouter.get("/", (_, res) => {
    res.json({ message: "Healthy spaceRouter" });
});
exports.default = spaceRouter;
