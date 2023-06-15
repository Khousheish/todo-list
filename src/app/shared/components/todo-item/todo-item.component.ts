import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { Item } from '../../models/item.model';

@Component({
  selector: 'td-todo-item',
  standalone: true,
  imports: [CommonModule, CheckboxModule, ReactiveFormsModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input({required: true}) item!: Item;

  itemFormGroup!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm () {
    this.itemFormGroup = this.formBuilder.group({
      completed: [this.item.completed],
    });
  }
}
