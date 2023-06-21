import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsRepository {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  getItems(): Observable<{data: Item[]}> {
    return this.httpClient.get<{data: Item[]}>('assets/items.json');
  }
}
