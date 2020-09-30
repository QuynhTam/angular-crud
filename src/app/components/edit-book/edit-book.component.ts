import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit,OnDestroy {
  // public id: number;
  book: Book;
  subscription: Subscription;
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
  updateBook() {
    this.bookService.editBook(this.book);
    this.router.navigate(['']);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
