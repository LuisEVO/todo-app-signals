import { Injectable } from '@angular/core';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [];

  set(tasks: Task[]) {
    this.tasks = tasks;
  }

  add(newTask: Task) {
    this.tasks = [...this.tasks, newTask];
  }

  delete(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  update(updatedTask: Task) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
  }
}
