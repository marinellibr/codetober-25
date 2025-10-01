export interface Task {
  id: string;
  text: string;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}
