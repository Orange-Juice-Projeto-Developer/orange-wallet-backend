import { Router } from "express";
import categoryRoutes from "./CategoryRoutes";
import transactionRoutes from "./TransactionRoutes";

const routes = Router();

routes.use(transactionRoutes, categoryRoutes);

export default routes;
