import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  itemsSubject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([
    {
      title: 'test1',
      completed: false,
    },
    {
      title: 'test2',
      completed: true,
    },
    {
      title: 'test3',
      completed: false,
    },
  ]);
  items$: Observable<Item[]> = this.itemsSubject.asObservable();

  addItem(item: Item) {
    this.itemsSubject.next([
      ...this.itemsSubject.getValue(),
      item,
     ]);
  }
}
