CREATE TYPE "public"."coffee_size" AS ENUM('S', 'M', 'L');--> statement-breakpoint
CREATE TABLE "coffee_menu" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"size" "coffee_size" NOT NULL,
	"price" integer NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"total_price" integer NOT NULL,
	"items" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
