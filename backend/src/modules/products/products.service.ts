import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductService {
    constructor(private readonly prisma: PrismaService) {}

    async getAll() {
        const products = await this.prisma.product.findMany({include: {category: true}});

        return {
            success: true,
            data: products
        }
    }

    async createProduct(dto: CreateProductDto) {
        const existing = await this.prisma.product.findUnique({where: {name: dto.name}});

        if(existing) {
            throw new ConflictException('Product has already existed')
        }

        const newProduct = await this.prisma.product.create({data: dto})

        return {
            success: true,
            newProduct
        }
    }

    async updateProduct(id: number, dto: UpdateProductDto) {
        const existing = await this.prisma.product.findUnique({where: { id }});

        if(!existing) {
            throw new ConflictException('Product is not found')
        }

        const newProduct = await this.prisma.product.update({where: { id }, data: dto})

        return {
            success: true,
            newProduct
        }
    }

    async deleteProduct(id: number) {
        const existing = await this.prisma.product.findUnique({where: { id }});

        if(!existing) {
            throw new ConflictException('Product is not found')
        }

        const deletedProduct = await this.prisma.product.delete({where: { id }})

        return {
            success: true,
            deletedProduct
        }
    }
}