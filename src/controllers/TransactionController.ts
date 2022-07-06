import { Request, Response } from "express";
import { TransactionService } from "../services/TransactionService";

class TransactionController {
  async create(req: Request, res: Response) {
    const service = new TransactionService();
    console.log(req.body);
    try {
      const { title, value, type, category, date } = req.body;
      const transaction = await service.execute(
        title,
        value,
        type,
        category,
        date
      );
      return res.json(transaction);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

export { TransactionController };
