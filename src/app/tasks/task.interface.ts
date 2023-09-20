
export interface Task {
  id: number;
  description: string;
  isComplete: boolean;
}

export type TaskDTO = Omit<Task, 'id'>;
