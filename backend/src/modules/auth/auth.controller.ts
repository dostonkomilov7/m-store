import { Body, Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";
import { AuthGuard } from "@nestjs/passport";
import { GoogleAuthGuard } from "./guards/google.guard";
import { GitHubAuthGuard } from "./guards/github.guard";
import type { Request, Response } from "express";

@Controller('auth')
export class AuthController { 
    private readonly FRONT_URL: any
    constructor(private readonly service: AuthService) {
        this.FRONT_URL = process.env.FRONT_URL
    }

    @Post('register')
    async register(@Body() dto: RegisterDto) {
        return await this.service.register(dto)
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async validateUser(@Req() req: Request) {
        return req.user
    }

    @Get('google')
    @UseGuards(GoogleAuthGuard)
    async google() {}

    
    @Get('google/callback')
    @UseGuards(GoogleAuthGuard)
    async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
        const response = await this.service.googleAuth(req.user)
        return res.redirect(`${this.FRONT_URL}/src/pages/dashboard?userId=${response.user.id}`)
    }

    @Get('github')
    @UseGuards(GitHubAuthGuard)
    async github() {}

    
    @Get('github/callback')
    @UseGuards(GitHubAuthGuard)
    async githubAuthRedirect(@Req() req: Request, @Res() res: Response) {
        // return await this.service.githubAuth(req.user)
        // console.log(req.user)
        console.log(req.user, "AAA777")
        const response = await this.service.githubAuth(req.user)
        return res.redirect(`${this.FRONT_URL}/src/pages/dashboard?userId=${response.user.id}`)
    }

    @Get('users')
    async getAll() {
        return await this.service.getAll()
    }
}