
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreateBookInput {
    author?: string;
    description?: string;
    title?: string;
}

export class Book {
    id?: number;
    author?: string;
    description?: string;
    title?: string;
}

export abstract class IMutation {
    abstract createBook(createBookInput?: CreateBookInput): Book | Promise<Book>;

    abstract deleteBook(id: string): boolean | Promise<boolean>;
}

export abstract class IQuery {
    abstract getBooks(): Book[] | Promise<Book[]>;

    abstract getBook(id: string): Book | Promise<Book>;

    abstract temp__(): boolean | Promise<boolean>;
}
