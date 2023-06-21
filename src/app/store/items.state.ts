import { Item } from '../shared/models/item.model';

export interface ItemState {
  items: Item[];
  itemsPending: boolean;
}
