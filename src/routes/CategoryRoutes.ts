import { CategoryController } from "../controllers/CategoryController";

const categoryController = new CategoryController();
const express = require("express");
const categoryRoutes = express.Router();

categoryRoutes.post(
  "/createCategory",
  categoryController.createCategory
);
categoryRoutes.get(
  "/listCategories",
  categoryController.listAllCategories
);
categoryRoutes.patch(
  "/editCategory/:id",
  categoryController.updateCategory
);
categoryRoutes.delete(
  "/deleteCategory/:id",
  categoryController.deleteCategory
);

export default categoryRoutes;
