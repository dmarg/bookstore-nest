import { CreateBookDTO } from './dto/create-book.dto';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Book } from '../graphql.schema';
import { BooksService } from './books.service';

const pubSub = new PubSub();

@Resolver('Book')
export class BooksResolvers {
  constructor(private readonly booksService: BooksService) {}

  @Query()
  async getBooks() {
    console.log('get books');
    return await this.booksService.getBooks();
  }

  @Query()
  async getBook(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Book> {
    console.log('get book');
    return await this.booksService.getBook(id);
  }

  @Mutation()
  async addBook(@Args('createBookInput') args: CreateBookDTO): Promise<Book> {
    const createdBook = await this.booksService.addBook(args);
    // pubSub.publish('bookCreated', { bookCreated: createdBook });
    return createdBook;
  }
  
  @Mutation('deleteBook')
  async deleteBook(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<boolean> {
    const deletedBook = await this.booksService.deleteBook(id);
    // pubSub.publish('bookCreated', { bookCreated: createdBook });
    return deletedBook.affected > 0 ? true : false;
  }

  // @Subscription('catCreated')
  // catCreated() {
  //   return pubSub.asyncIterator('catCreated');
  // }
}