import { prismaClient } from "../database/PrismaClient";
class TransactionRepository {
  async create(
    title: string,
    value: number,
    type: string,
    category: string,
    date: Date
  ) {
    const transaction = await prismaClient.transaction.create({
      data: {
        title,
        value,
        type,
        category,
        date
      }
    });
    return transaction;
  }
}

export { TransactionRepository };
