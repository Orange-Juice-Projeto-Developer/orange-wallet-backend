import { TransactionController } from "../controllers/TransactionController";

const transactionController = new TransactionController();
const express = require("express");
const transactionRoutes = express.Router();

transactionRoutes.post("/transactions", transactionController.create);
transactionRoutes.get(
  "/transactions",
  transactionController.listAllTransactions
);
transactionRoutes.patch("/transactions/:id", transactionController.update);
transactionRoutes.delete("/transactions/:id", transactionController.delete);

export default transactionRoutes;
