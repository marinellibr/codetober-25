import { Component } from '@angular/core';
import { Column } from '../../models/kanban.model';
import { KANBAN_MOCK_DATA } from '../../mocks/kanban.mock';

@Component({
  selector: 'app-board',
  imports: [],
  templateUrl: './board.html',
  styleUrl: './board.scss',
  standalone: true,
})
export class Board {
  columns: Column[] = JSON.parse(JSON.stringify(KANBAN_MOCK_DATA));
}
