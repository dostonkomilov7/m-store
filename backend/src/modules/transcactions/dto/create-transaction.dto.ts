import { IsInt, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class CreateTransactionDto {
    @IsString()
    type: string;
    
    @IsNumber()
    @IsPositive()
    price: number;

    @IsInt()
    @IsPositive()
    @Min(1)
    quantity: number;

    @IsInt()
    @IsPositive()
    @Min(1)
    product_id: number;
}