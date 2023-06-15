import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'td-add-item-dialog',
  standalone: true,
  imports: [CommonModule, InputTextModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.scss']
})
export class AddItemDialogComponent implements OnInit {
  itemForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly todoService: TodoService,
    private readonly dynamicDialogRef: DynamicDialogRef,
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.itemForm = this.formBuilder.group({
      text: [],
    });
  }

  submit() {
    this.todoService.addItem({
      completed: false,
      title: this.itemForm.get('text')?.value,
    });
    this.dynamicDialogRef.close();
  }
}
