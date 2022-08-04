import { prismaClient } from "../database/PrismaClient";
class TransactionRepository {
  async create(
    title: string,
    value: number,
    categoryId: number,
    date: Date
  ) {
    const transaction = await prismaClient.transaction.create({
      data: {
        title,
        value,
        categoryId,
        date
      }
    });
    return transaction;
  }

  async findMany() {
    const transaction = await prismaClient.transaction.findMany({
      select: {
        id: true,
        title: true,
        value: true,
        Category: {
          select: {
            categoryName: true,
            categoryType: true
          }
        },
        date: true
      }
    });
    return transaction;
  }

  async update(id: string, title: string, value: number, date: Date) {
    const transaction = await prismaClient.transaction.update({
      where: { id: String(id) },
      data: {
        title,
        value,
        date
      }
    });
    return transaction;
  }

  async delete(id: string) {
    const transaction = await prismaClient.transaction.delete({
      where: { id }
    });
    return transaction;
  }
}

export { TransactionRepository };
