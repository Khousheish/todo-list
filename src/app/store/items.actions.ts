import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Item } from '../shared/models/item.model';

export const ItemActions = createActionGroup({
  source: 'Item',
  events: {
    'Get Items': emptyProps(),
    'Get Items Success': props<{items: Item[]}>(),
    'Get Items Failure': emptyProps(),
  }
});
