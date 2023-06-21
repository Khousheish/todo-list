import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { delay, map, switchMap } from 'rxjs/operators';
import { Item } from '../shared/models/item.model';
import { ItemsRepository } from '../shared/services/items.repository';
import { ItemActions } from './items.actions';

@Injectable()
export class ItemEffects {
  getItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ItemActions.getItems),
      switchMap(() => this.itemsRepository.getItems()),
      delay(5000),
      map((items: {data: Item[]}) => ItemActions.getItemsSuccess({items: items.data}))
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly itemsRepository: ItemsRepository
  ) {}
}
