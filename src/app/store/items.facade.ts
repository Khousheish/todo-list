import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from '../shared/models/item.model';
import { ItemActions } from './items.actions';
import { selectItems, selectItemsPending } from './items.reducer';

@Injectable({
  providedIn: 'root'
})
export class ItemsFacade {
  items$: Observable<Item[]> = this.store.select(selectItems);
  itemsPending$: Observable<boolean> = this.store.select(selectItemsPending);

  constructor(private readonly store: Store) {}

  getItems(): void {
    this.store.dispatch(ItemActions.getItems());
  }
}
