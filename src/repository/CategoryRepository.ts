import { prismaClient } from "../database/PrismaClient";

class CategoryRepository {
  async create(categoryName: string, categoryType: string) {
    const category = await prismaClient.category.create({
      data: {
        categoryName,
        categoryType
      }
    });
    return category;
  }
  async findMany() {
    const category = await prismaClient.category.findMany({});
    return category;
  }

  async update(
    id: number,
    categoryName: string,
    categoryType: string
  ) {
    const category = await prismaClient.category.update({
      where: { id: Number(id) },
      data: {
        categoryName,
        categoryType
      }
    });
    return category;
  }

  async delete(id: number) {
    const category = await prismaClient.category.delete({
      where: { id }
    });
    return category;
  }
}

export { CategoryRepository };
