import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';
import { ApiUseTags, ApiImplicitParam } from '@nestjs/swagger';

@ApiUseTags('books')
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }

  @Get(':bookID')
  async getBook(@Param('bookID', new ParseIntPipe()) bookID: number) {
    const book = await this.booksService.getBook(bookID);
    return book;
  }

  @Post()
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    const book = await this.booksService.addBook(createBookDTO);
    return book;
  }

  @Delete(':bookID')
  async deleteBook(@Param('bookID', new ParseIntPipe()) bookID: number) {
    const book = await this.booksService.deleteBook(bookID);
    return book;
  }
}
