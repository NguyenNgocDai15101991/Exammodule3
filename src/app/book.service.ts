import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = environment.apiUrl;
  constructor() { }
}
