import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketModule } from './socket/socket.module';
import { GoogleaiModule } from './googleai/googleai.module';

@Module({
  imports: [SocketModule, GoogleaiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
