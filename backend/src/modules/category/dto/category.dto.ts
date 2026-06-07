import { Type } from "class-transformer";
import { IsOptional, IsString, Matches, MinLength, ValidateNested } from "class-validator";

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

export class CategoryDto {
    @ValidateNested()
    @Type(() => BaseLanguageDto)
    name: Record<string, string>;
}