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
    try {
      const transactions = await prismaClient.transaction.findMany();

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

      let transaction = await prismaClient.transaction.findUnique({
        where: { id: String(id) }
      });

      if (!transaction) return res.json({ error: "Cannot find transaction" });
      transaction = await prismaClient.transaction.update({
        where: { id: String(id) },
        data: { title, type, value, category, date }
      });
      return res.status(201).json(transaction);
    } catch (error) {
      return res.json({ error });
    }
  }

  async deleteTransaction(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const transaction = await prismaClient.transaction.delete({
        where: {
          id
        }
      });

      return res.status(200).json(transaction);
    } catch (error) {
      return res.status(404).json(error);
    }
  }
}

export { TransactionController };
