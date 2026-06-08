import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller('auth')
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @Post('register')
    async register(@Body() dto: RegisterDto) {
        return await this.service.register(dto)
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async validateUser(@Request() req) {
        return req.user
    }
}