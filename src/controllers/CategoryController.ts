import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService";

class CategoryController {
  async createCategory(req: Request, res: Response) {
    const service = new CategoryService();

    try {
      const { categoryName, categoryType } = req.body;
      const category = await service.execute(
        categoryName,
        categoryType
      );
      return res.status(201).json(category);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async listAllCategories(req: Request, res: Response) {
    const service = new CategoryService();
    try {
      const category = await service.list();

      return res.status(200).json(category);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async updateCategory(req: Request, res: Response) {
    const service = new CategoryService();
    try {
      const params = req.params;
      const categoryId = Number(params.id);
      const { categoryName, categoryType } = req.body;

      const category = await service.updateOne(
        categoryId,
        categoryName,
        categoryType
      );

      return res.status(201).json(category);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async deleteCategory(req: Request, res: Response) {
    const service = new CategoryService();
    try {
      const params = req.params;
      const categoryId = Number(params.id);

      const category = await service.remove(categoryId);

      return res.status(200).json(category);
    } catch (error) {
      return res.status(404).json(error);
    }
  }
}

export { CategoryController };
