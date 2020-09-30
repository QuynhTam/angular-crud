import { AddBookComponent } from './components/add-book/add-book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { ShowBooksComponent } from './components/show-books/show-books.component';

const routes: Routes = [
  { path: '', component: ShowBooksComponent },
  { path: 'edit/:id', component: EditBookComponent },
  { path: 'add', component: AddBookComponent },
  { path: 'delete/:id', component: DeleteBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
