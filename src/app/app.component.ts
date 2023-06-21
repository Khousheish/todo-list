import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AddItemDialogComponent } from './shared/components/add-item-dialog/add-item-dialog.component';
import { TodoItemComponent } from './shared/components/todo-item/todo-item.component';
import { Item } from './shared/models/item.model';
import { TodoService } from './shared/services/todo.service';
import { ItemsFacade } from './store/items.facade';

@Component({
  selector: 'td-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardModule, ButtonModule, TodoItemComponent, DynamicDialogModule, ProgressSpinnerModule],
  providers: [DialogService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todo-list';
  ref!: DynamicDialogRef;

  constructor(
    protected readonly todoService: TodoService,
    private readonly dialogService: DialogService,
    protected readonly itemsFacade: ItemsFacade,
  ) {}

  ngOnInit(): void {
    this.itemsFacade.getItems();
  }

  addItem(item: Item) {
    this.todoService.addItem(item);
  }

  openDialog() {
    this.ref = this.dialogService.open(AddItemDialogComponent, {header: 'Add item'});
  }
}
