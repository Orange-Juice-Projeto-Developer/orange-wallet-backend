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

  async findMany() {
    const transaction = await prismaClient.transaction.findMany({});
    return transaction;
  }

  async update(
    id: string,
    title: string,
    value: number,
    type: string,
    category: string,
    date: Date
  ) {
    const transaction = await prismaClient.transaction.update({
      where: { id: String(id) },
      data: {
        title,
        type,
        value,
        category,
        date
      }
    });
    return transaction;
  }
}

export { TransactionRepository };
