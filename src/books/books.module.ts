import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './books.entity';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}