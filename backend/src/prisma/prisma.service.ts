import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private static pool: Pool;

  constructor() {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });

    const adapter = new PrismaPg(pool);

    super({ adapter });

    PrismaService.pool = pool;
  }

  async onModuleDestroy() {
    await this.$disconnect();
    await PrismaService.pool.end();
  }

  async onModuleInit() {
    await this.$connect();
    console.log('Database successfully connected! ✅');
  }
}
