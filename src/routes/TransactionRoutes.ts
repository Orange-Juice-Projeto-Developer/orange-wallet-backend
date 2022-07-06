import { Request, Response } from "express";

const express = require("express");
const transactionRoutes = express.Router();

transactionRoutes.get("/", (req: Request, res: Response) => {
  return res.json("Hello World!");
});

export default transactionRoutes;
