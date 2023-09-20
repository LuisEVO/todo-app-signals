import { Injectable, WritableSignal, signal } from '@angular/core';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksSignalService {
  tasks: WritableSignal<Task[]> = signal<Task[]>([]);

  set(tasks: Task[]) {
    this.tasks.set(tasks);
  }

  add(newTask: Task) {
    this.tasks.update(tasks => [...tasks, newTask]);
  }

  delete(id: number) {
    this.tasks.update(tasks => tasks.filter((task) => task.id !== id));

  }

  update(updatedTask: Task) {
    /* this.tasks.update(tasks => tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    })); */

    this.tasks.mutate(tasks => {
      const index = tasks.findIndex(task => task.id === updatedTask.id);
      tasks[index] = updatedTask;
    })
  }

}
