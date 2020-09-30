import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book = {
    id: 0,
    name: '',
    author: '',
    description: ''
  };
  constructor(private router: Router, private bookService: BookService, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    // this.book = new Book();
  }
  addBook() {
    this.bookService.createBook(this.book)
    this.router.navigate(['']);
  }
}
