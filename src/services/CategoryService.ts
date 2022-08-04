import { CategoryRepository } from "../repository/CategoryRepository";

class CategoryService {
  async execute(categoryName: string, categoryType: string) {
    const category = new CategoryRepository();
    return category.create(categoryName, categoryType);
  }
  async list() {
    const category = new CategoryRepository();
    return category.findMany();
  }

  async updateOne(
    id: number,
    categoryName: string,
    categoryType: string
  ) {
    const category = new CategoryRepository();
    return category.update(id, categoryName, categoryType);
  }

  async remove(id: number) {
    const category = new CategoryRepository();
    return category.delete(id);
  }
}
export { CategoryService };
