import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";
import { TransactionService } from "../services/TransactionService";

class TransactionController {
  async create(req: Request, res: Response) {
    const service = new TransactionService();

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

  async listAllTransactions(req: Request, res: Response) {
    try {
      const transactions = await prismaClient.transaction.findMany();

      return res.status(200).json(transactions);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export { TransactionController };
