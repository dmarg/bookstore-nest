import { Book } from './books.entity';
import { CreateBookDTO } from './dto/create-book.dto';
import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../mocks/books.mocks';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection, DeleteResult } from 'typeorm';

export interface IBooksService {
  getBooks(): Promise<Book[]>;
  getBook(bookID: number): Promise<Book>;
  deleteBook(bookID: number): Promise<DeleteResult>;
  addBook(book: CreateBookDTO): Promise<CreateBookDTO>;
}

@Injectable()
export class BooksService implements IBooksService {
  books = BOOKS;

  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ) {}

  async getBooks(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async getBook(bookID: number): Promise<Book> {
    let book = await this.bookRepository.findOne(bookID);

    if (!book) {
      throw new HttpException('Book does not exist!', 404)
    } else {
      return book;
    }
  }

  async addBook(book: CreateBookDTO): Promise<CreateBookDTO> {
    const user = this.bookRepository.create(book);
    return await this.bookRepository.save(user);
  }

  async deleteBook(bookID: number): Promise<DeleteResult> {
    let id = Number(bookID);
    return await this.bookRepository.createQueryBuilder().delete().where('id = :id', { id }).execute();
  }
}
