import { createFeature, createReducer, on } from '@ngrx/store';
import { ItemActions } from './items.actions';
import { ItemState } from './items.state';

export const itemInitialState: ItemState = {
  items: [],
  itemsPending: false,
};

export const itemsFeature = createFeature({
  name: 'Item',
  reducer: createReducer(
    itemInitialState,
    on(ItemActions.getItems, (state) => ({
      ...state,
      itemsPending: true,
    })),
    on(ItemActions.getItemsSuccess, (state, { items }) => ({
      ...state,
      items,
      itemsPending: false,
    }))
  ),
});

export const {
  name,
  reducer,
  selectItemState,
  selectItems,
  selectItemsPending,
} = itemsFeature;
