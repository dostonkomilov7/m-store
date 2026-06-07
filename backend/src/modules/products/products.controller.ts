import { Body, Controller, Delete, Get, Param, Patch, Post, Render } from "@nestjs/common";
import { ProductService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Controller('products')
export class ProductController {
    constructor(private readonly service: ProductService) { }

    @Get()
    @Render('dashboard')
    async getAll() {
        return await this.service.getAll()
    }

    @Post()
    async createProduct(@Body() dto: CreateProductDto) {
        return await this.service.createProduct(dto)
    }

    @Patch(':id')
    async updateProduct(@Param('id') id: number, @Body() dto: UpdateProductDto) {
        return await this.service.updateProduct(id, dto)
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: number) {
        return await this.service.deleteProduct(id)
    }
}