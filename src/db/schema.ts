import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
  jsonb,
  pgEnum,
} from 'drizzle-orm/pg-core';

export const coffeeSizeEnum = pgEnum('coffee_size', ['S', 'M', 'L']);

export const coffeeMenu = pgTable('coffee_menu', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  size: coffeeSizeEnum('size').notNull(),
  price: integer('price').notNull(),
  description: text('description'),
});

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  status: text('status').default('pending').notNull(),
  totalPrice: integer('total_price').notNull(),
  items: jsonb('items').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
