import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {

  constructor(private bookService: BookService) {
    this.getBooks();
  }

  ngOnInit(): void {
  }
  bookList: Array<Book> = [];
  getBooks(): void {
    this.bookList = this.bookService.getAllBooks();
  }
}
