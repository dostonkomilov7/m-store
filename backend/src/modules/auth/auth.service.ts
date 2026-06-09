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

        if(existingUser && existingUser.password === password) {
          const {password, ...result}  = existingUser;
          return result
        }

        return null
    }

    async googleAuth(user: any) {
        const googleId = user?.id;

        let existingUser = await this.prisma.user.findFirst({where: {google_id: googleId}})

        if(!existingUser) {
            existingUser = await this.prisma.user.create({data: {
                full_name: user?.displayName,
                email: user?.emails[0]?.value,
                google_id: googleId
            }})
        }

        return {
            user: existingUser
        }
    }

    async githubAuth(user: any) {
        const githubId = user?.githubId

        let existingUser = await this.prisma.user.findFirst({where: {github_id: githubId}})

        if(!existingUser) {
            existingUser = await this.prisma.user.create({data: {
                full_name: user?.username,
                email: user?.email,
                github_id: githubId
            }})
        }

        return {
            user: existingUser
        }
    }

    async getAll() {
        const users = await this.prisma.user.findMany()

        return {
            success: true,
            data: users
        }
    }
}