import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FlService } from './fl.service';
import { FlController } from './fl.controller';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        baseURL: process.env.ML_ENGINE_URL || 'http://ml-engine:8000',
        timeout: 5000,
      }),
    }),
  ],
  controllers: [FlController],
  providers: [FlService],
  exports: [FlService],
})
export class FlModule {}
