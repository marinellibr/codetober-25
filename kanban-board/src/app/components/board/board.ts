import { Component } from '@angular/core';
import { Column, Task } from '../../models/kanban.model';
import { KANBAN_MOCK_DATA } from '../../mocks/kanban.mock';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-board',
  imports: [CommonModule, DragDropModule, ReactiveFormsModule],
  templateUrl: './board.html',
  styleUrl: './board.scss',
  standalone: true,
})
export class Board {
  columns: Column[] = JSON.parse(JSON.stringify(KANBAN_MOCK_DATA));
  isAddingColumn: boolean = false;
  isAddingCard: boolean = false;
  addColumnForm: FormGroup;
  addCardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addColumnForm = this.fb.group({
      title: ['', Validators.required],
    });

    this.addCardForm = this.fb.group({
      card: ['', Validators.required],
    });
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  toggleForm() {
    this.addColumnForm.reset();
    this.isAddingColumn = !this.isAddingColumn;
  }

  toggleAddCard() {
    this.addCardForm.reset();
    this.isAddingCard = !this.isAddingCard;
  }

  addCard(index: number) {
    if (this.addCardForm.valid) {
      const newCard: Task = {
        id: `task-${this.columns[index].tasks.length + 1}`,
        text: this.addCardForm.value.card.trim(),
      };
      this.columns[index].tasks.push(newCard);
    }
    this.toggleAddCard();
  }

  addColumn() {
    if (this.addColumnForm.valid) {
      const newColumn: Column = {
        id: `col-${this.columns.length + 1}`,
        title: this.addColumnForm.value.title.trim(),
        tasks: [],
      };
      this.columns.push(newColumn);
    }

    this.toggleForm();
  }

  deleteColumn(columnIndex: number) {
    if (confirm(`Are you sure you want to delete this column?`)) {
      this.columns.splice(columnIndex, 1);
    }
  }
}
