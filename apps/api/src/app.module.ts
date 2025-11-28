import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FlModule } from './modules/fl/fl.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FlModule,
    // other modules...
  ],
})
export class AppModule {}
