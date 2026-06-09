import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-github2";

@Injectable()
export class GitHubStrategy extends PassportStrategy(Strategy, 'github') {
    constructor(private readonly configService: ConfigService) {
        super({
            clientID: configService.getOrThrow<string>('GITHUB_CLIENT_ID'),
            clientSecret: configService.getOrThrow<string>('GITHUB_CLIENT_SECRET'),
            callbackURL: configService.getOrThrow<string>('GITHUB_CALLBACK_URL'),
            scope: ['user:email'],
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: any) {
        console.log(accessToken, refreshToken)
        const { id, username, emails } = profile;

        const user = {
            githubId: id,
            username: username,
            email: emails && emails.length > 0 ? emails[0].value : null,
        };

        console.log(user, 'hello')
        done(null, user)
    }
} 
