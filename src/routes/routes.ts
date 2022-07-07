import { Router } from "express";
import transactionRoutes from "./TransactionRoutes";

const routes = Router();

routes.use(transactionRoutes);

export default routes;
