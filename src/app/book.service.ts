import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getList(): Observable<Book[]> {
    const url = `${this.apiUrl}/books`;
    return this.http.get<Book[]>(url);
  }
}
