import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg'; // Меняем Pool на чистый Client!
import { ConfigService } from '@nestjs/config';
import * as schema from '../db/schema';

export const DrizzleAsyncProvider = 'DrizzleAsyncProvider';

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const client = new Client({
        host: configService.get<string>('DATABASE_HOST') || '127.0.0.1',
        port: Number(configService.get('DATABASE_PORT')) || 5432,
        user: configService.get<string>('DATABASE_USER') || 'postgres',
        database: configService.get<string>('DATABASE_NAME') || 'coffee_shop',
        password: String(configService.get('DATABASE_PASSWORD')),
      });

      try {
        await client.connect();
        console.log(
          '🚀 [Drizzle] База успешно подключена через чистый Client!',
        );
      } catch (error) {
        console.error('❌ [Drizzle] Ошибка подключения:', error);
        throw error;
      }

      // @ts-ignore
      return drizzle(client, { schema });
    },
  },
];
