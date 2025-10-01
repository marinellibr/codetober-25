import { Column } from '../models/kanban.model';

export const KANBAN_MOCK_DATA: Column[] = [
  {
    id: 'col-1',
    title: 'To Do',
    tasks: [
      { id: 'task-1', text: 'Implement user authentication' },
      { id: 'task-2', text: 'Design the database schema' },
    ],
  },
  {
    id: 'col-2',
    title: 'In Progress',
    tasks: [{ id: 'task-3', text: 'Develop the main dashboard UI' }],
  },
  {
    id: 'col-3',
    title: 'Done',
    tasks: [{ id: 'task-4', text: 'Setup the initial project structure' }],
  },
];
