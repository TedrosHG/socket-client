import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GithubStrategy, JwtStrategy } from './auth.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
    imports:[
        JwtModule.registerAsync({
            useFactory: async (configService: ConfigService) => {
              return {
                signOptions: { expiresIn: '10h' },
                secret: configService.get<string>('JWT_SECRET'),
              };
            },
            inject: [ConfigService],
          }),
    ],
  controllers: [AuthController],
  providers: [AuthService,GithubStrategy,JwtStrategy]
})
export class AuthModule {}
