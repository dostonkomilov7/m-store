import { IsInt, IsString, Min } from "class-validator";

export class RegisterDto {
    @IsString()
    full_name: string;

    @IsInt()
    @Min(12)
    age: number;

    @IsString()
    email: string;

    @IsString()
    password: string;
}