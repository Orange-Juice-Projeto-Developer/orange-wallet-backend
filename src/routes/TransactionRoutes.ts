import { TransactionController } from "../controllers/TransactionController";

const transactionController = new TransactionController();
const express = require("express");
const transactionRoutes = express.Router();

transactionRoutes.post(
  "/transactions",
  transactionController.createTransaction
);
transactionRoutes.get(
  "/transactions",
  transactionController.listAllTransactions
);
transactionRoutes.patch(
  "/transactions/:id",
  transactionController.updateTransaction
);
transactionRoutes.delete(
  "/transactions/:id",
  transactionController.deleteTransaction
);

export default transactionRoutes;
