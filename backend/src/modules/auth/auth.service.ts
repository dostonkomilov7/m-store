import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    async register(dto: RegisterDto) {
        const existingUser = await this.prisma.user.findFirst({
            where: {email: dto.email}
        })

        if(existingUser) {
            throw new ConflictException('User has already existed')
        }

        const newUser = await this.prisma.user.create({data: dto});

        return {
            success: true,
            data: newUser
        }
    }

    async validateUser(email: string, password: string) {
        const existingUser = await this.prisma.user.findFirst({
            where: {email}
        })

        if(existingUser) {
          const {password, ...result}  = existingUser;
          return result
        }

        return null
    }
}