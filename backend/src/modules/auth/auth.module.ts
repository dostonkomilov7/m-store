import { Module } from "@nestjs/common";
import { PrismaModule } from "../../prisma/prisma.module";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./strategies/local.strategy";
import { AuthController } from "./auth.controller";

@Module({
    imports: [PrismaModule, PassportModule],
    providers: [AuthService, LocalStrategy],
    controllers: [AuthController]
})

export class AuthModule {}