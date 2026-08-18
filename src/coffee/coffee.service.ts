import { Injectable, Inject } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { coffeeMenu } from 'src/db/schema';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';

@Injectable()
export class CoffeeService {
  constructor(@Inject(DrizzleAsyncProvider) private db: NodePgDatabase) {}

  async getAllCoffee() {
    return await this.db.select().from(coffeeMenu);
  }
}
