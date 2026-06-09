import { Module } from "@nestjs/common";
import { PrismaModule } from "../../prisma/prisma.module";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./strategies/local.strategy";
import { AuthController } from "./auth.controller";
import { GoogleStrategy } from "./strategies/google.strategy";
import { GitHubStrategy } from "./strategies/github.strategy";

@Module({
    imports: [PrismaModule, PassportModule],
    providers: [AuthService, LocalStrategy, GoogleStrategy, GitHubStrategy],
    controllers: [AuthController]
})

export class AuthModule {}