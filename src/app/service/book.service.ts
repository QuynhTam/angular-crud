import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  countId: number;

  constructor() { }
  books: Array<Book> = [
    {
      id: 1,
      name: 'Java',
      author: 'Codegym',
      description: 'new book'
    },
    {
      id: 2,
      name: 'PHP',
      author: 'Codegym',
      description: 'new 97%'
    },
    {
      id: 3,
      name: 'JavaScript',
      author: 'Codegym',
      description: 'like new'
    },
    {
      id: 4,
      name: 'HTML5',
      author: 'Codegym',
      description: 'new 99%'
    },
  ];
  getAllBooks(): Array<Book> {
    return this.books;
  }
  getBookByID(id: number): Book {
    return this.books.find(book => book.id === id);
  }
  editBook(book: Book): void {
    this.books.forEach(p => {
      if(p.id === book.id) {
        p = book;
      }
    })
    console.log(this.books);
    console.log(this.books.length)
  }
  createBook(book: Book) {
    this.countId++;
    book.id = this.countId;
    this.books.push(book);
  }

  deleteBook(book: Book) {
    this.books.forEach((item, index) => {
      if (item === book)
        this.books.splice(index, 1);
    })
    console.log(this.books)
  }
}
