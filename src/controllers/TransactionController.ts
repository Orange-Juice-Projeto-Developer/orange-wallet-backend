import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";
import { TransactionService } from "../services/TransactionService";

class TransactionController {
  async createTransaction(req: Request, res: Response) {
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
      return res.status(201).json(transaction);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async listAllTransactions(req: Request, res: Response) {
    const service = new TransactionService();
    try {
      const transactions = await service.list();

      return res.status(200).json(transactions);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async updateTransaction(req: Request, res: Response) {
    const service = new TransactionService();
    try {
      const { id } = req.params;
      const { title, value, type, category, date } = req.body;

      const transaction = await service.updateOne(
        id,
        title,
        value,
        type,
        category,
        date
      );

      return res.status(201).json(transaction);
    } catch (error) {
      return res.json({ error });
    }
  }

  async deleteTransaction(req: Request, res: Response) {
    const service = new TransactionService();
    try {
      const { id } = req.params;

      const transaction = await service.remove(id);

      return res.status(200).json(transaction);
    } catch (error) {
      return res.status(404).json(error);
    }
  }
}

export { TransactionController };
