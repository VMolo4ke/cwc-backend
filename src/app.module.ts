import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path'; // Импортируем модуль path
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeModule } from './coffee/coffee.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.resolve(process.cwd(), '.env'),
    }),
    CoffeeModule,
  ],
})
export class AppModule {}
