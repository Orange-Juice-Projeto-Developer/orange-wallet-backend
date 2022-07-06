import { Router } from "express";
import transactionRoutes from "./TransactionRoutes";

const routes = Router();

routes.use("/transactions", transactionRoutes);

export default routes;
