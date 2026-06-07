import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CategoryDto } from "./dto/category.dto";

@Injectable()
export class CategoryService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll() {
        const categories = await this.prisma.category.findMany()

        return {
            success: true,
            categories
        }
    }

    async createCategory(dto: CategoryDto) {
        const existing = await this.prisma.category.findMany({
            where: {
                name: {
                    path: ["uz"],
                    equals: dto.name?.uz
                }
            }
        })

        if (existing.length > 0) {
            throw new ConflictException('Category has already existed')
        }

        const newCategory = await this.prisma.category.create({ data: dto })

        return {
            success: true,
            newCategory
        }
    }

    async deleteCategory(id: number) {
        const existing = await this.prisma.category.findUnique({ where: { id } })

        if (!existing) {
            throw new ConflictException('Category is not found')
        }

        const deletedCategory = await this.prisma.category.delete({ where: { id } })

        return {
            success: true,
            deletedCategory
        }
    }
}