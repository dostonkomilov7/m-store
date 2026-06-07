import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryDto } from "./dto/category.dto";

@Controller('categories')
export class CategoryController {
    constructor(private readonly service: CategoryService) {}

    @Get()
    async getAll() {
        return await this.service.getAll()
    }

    @Post()
    async createCategory(@Body() dto: CategoryDto) {
        return await this.service.createCategory(dto)
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id: number) {
        return await this.service.deleteCategory(id)
    }
}