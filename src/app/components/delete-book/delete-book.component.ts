import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit,OnDestroy {
  book: Book;
  subscription:Subscription;
  constructor(private activateRouter: ActivatedRoute, private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void {
    this.subscription = this.activateRouter.paramMap.subscribe((data: ParamMap) => {
      const id = +data.get('id');
      this.book = this.bookService.getBookByID(id);
    })
  }
  deleteBook() {
    this.bookService.deleteBook(this.book);
    this.router.navigate(['']);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
