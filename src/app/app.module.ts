import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ListBooksComponent } from './list-books/list-books.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    ListBooksComponent,
    DetailBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
