import { TransactionRepository } from "../repository/TransactionRepository";

class TransactionService {
  async execute(
    title: string,
    value: number,
    categoryId: number,
    date: Date
  ) {
    const transaction = new TransactionRepository();
    return transaction.create(title, value, categoryId, date);
  }

  async list() {
    const transaction = new TransactionRepository();
    return transaction.findMany();
  }

  async updateOne(
    id: string,
    title: string,
    value: number,
    categoryId: number,
    date: Date
  ) {
    const transaction = new TransactionRepository();
    return transaction.update(id, title, value, categoryId, date);
  }

  async remove(id: string) {
    const transaction = new TransactionRepository();
    return transaction.delete(id);
  }
}

export { TransactionService };
