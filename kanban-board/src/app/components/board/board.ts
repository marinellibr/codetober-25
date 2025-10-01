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

@Component({
  selector: 'app-board',
  imports: [CommonModule, DragDropModule],
  templateUrl: './board.html',
  styleUrl: './board.scss',
  standalone: true,
})
export class Board {
  columns: Column[] = JSON.parse(JSON.stringify(KANBAN_MOCK_DATA));

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

  addColumn() {
    const newColumnName = prompt('Enter column name:');
    if (newColumnName) {
      const newColumn: Column = {
        id: `col-${this.columns.length + 1}`,
        title: newColumnName,
        tasks: [],
      };
      this.columns.push(newColumn);
    }
  }

  deleteColumn(columnIndex: number) {
    if (confirm(`Are you sure you want to delete this column?`)) {
      this.columns.splice(columnIndex, 1);
    }
  }
}
