import { Module } from '@nestjs/common';
import { GoogleaiService } from './googleai.service';
import { GoogleaiController } from './googleai.controller';

@Module({
  providers: [GoogleaiService],
  controllers: [GoogleaiController]
})
export class GoogleaiModule {}
