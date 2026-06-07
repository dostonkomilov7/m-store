import { Type } from "class-transformer";
import { IsInt, IsNumber, IsOptional, IsPositive, IsString, Matches, Min, MinLength, ValidateNested } from "class-validator";

export class BaseLanguageDto {
    // 1. Uzbek Latin alphabet (Includes basic letters, apostrophes, and modifying single quotes ’ ' ‘)
    @IsString()
    @MinLength(3)
    @Matches(/^[a-zA-Z\s’''‘]+$/, {
        message: 'uz must contain only Uzbek Latin alphabet characters and spaces',
    })
    uz: string;

    // 2. Cyrillic script validation (Covers standard Russian + unique Uzbek Cyrillic: Қ, Ғ, Ҳ, Ў)
    @IsString()
    @MinLength(3)
    @Matches(/^[\u0400-\u04FF\s]+$/, {
        message: 'uz_cyr must contain only Cyrillic script characters and spaces',
    })
    uz_cyr: string;

    // 3. English native alphabet validation (Built-in locale support works perfectly here)
    @IsOptional()
    @IsString()
    @MinLength(3)
    @Matches(/^[a-zA-Z\s]+$/, {
        message: 'en must contain only English alphabet characters and spaces',
    })
    en: string;
}

export class UpdateProductDto {
    @IsOptional()
    @ValidateNested()
    @Type(() => BaseLanguageDto)
    name: Record<string, string>;

    @IsOptional()
    @ValidateNested()
    @Type(() => BaseLanguageDto)
    description?: Record<string, string>;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    input_price: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    output_price: number;

    @IsOptional()
    @IsInt()
    @IsPositive()
    @Min(1)
    quantity: number;

}