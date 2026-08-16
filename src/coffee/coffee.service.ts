import { Injectable, Inject } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { coffeeMenu } from 'src/db/schema';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import * as schema from '../db/schema';

@Injectable()
export class CoffeeService {
  constructor(
    @Inject(DrizzleAsyncProvider) private db: NodePgDatabase<typeof schema>,
  ) {}

  async addCoffee(data: CreateCoffeeDto) {
    const newCoffee = await this.db.insert(coffeeMenu).values(data).returning();
    return newCoffee[0];
  }

  async allCoffee() {
    return await this.db.select().from(coffeeMenu);
  }
}
