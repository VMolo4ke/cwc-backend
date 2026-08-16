import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';
import { DrizzleModule } from 'src/drizzle/drizzle.module';

@Module({
  controllers: [CoffeeController],
  providers: [CoffeeService],
  imports: [DrizzleModule],
})
export class CoffeeModule {}
