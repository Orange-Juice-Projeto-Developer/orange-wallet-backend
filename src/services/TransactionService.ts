import { TransactionRepository } from "../repository/TransactionRepository";

class TransactionService {
  async execute(
    title: string,
    value: number,
    type: string,
    category: string,
    date: Date
  ) {
    const transaction = new TransactionRepository();
    return transaction.create(title, value, type, category, date);
  }

  async list() {
    const transaction = new TransactionRepository();
    return transaction.findMany();
  }

}

export { TransactionService };
