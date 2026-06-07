import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './modules/products/products.module';
import { CategoryModule } from './modules/category/category.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
    ProductModule,
    CategoryModule
  ],
  controllers: [AppController],

})
export class AppModule {}
