import { TransactionController } from "../controllers/TransactionController";

const transactionController = new TransactionController();
const express = require("express");
const transactionRoutes = express.Router();

transactionRoutes.post(
  "/createTransaction",
  transactionController.createTransaction
);
transactionRoutes.get(
  "/listTransaction",
  transactionController.listAllTransactions
);
transactionRoutes.patch(
  "/editTransaction/:id",
  transactionController.updateTransaction
);
transactionRoutes.delete(
  "/deleteTransaction/:id",
  transactionController.deleteTransaction
);

export default transactionRoutes;
