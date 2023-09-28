import { Injectable, WritableSignal, computed, effect, signal } from '@angular/core';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: WritableSignal<Task[]> = signal<Task[]>([]);
  total = computed(() => this.tasks().length)

  constructor() {
    effect(() => {
      console.log(`tasks has changed ${this.tasks()}`);

    })
  }

  set(tasks: Task[]) {
    this.tasks.set(tasks);
  }

  add(newTask: Task) {
    // this.tasks = [...this.tasks, newTask];
    this.tasks.update((tasks) => [...tasks, newTask])
    // Option 2:
    // this.tasks.mutate((tasks) => tasks.push(newTask))
  }

  delete(id: number) {
    // this.tasks = this.tasks.filter((task) => task.id !== id);
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id))
    // Option 2:
    /*
    this.tasks.mutate((tasks) => {
      const index = tasks.findIndex(task => task.id === id);
      tasks.splice(index, 1)
    })
    */
  }

  update(updatedTask: Task) {
    /*
    this.tasks = this.tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    */

    this.tasks.update((tasks) => tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    }))

    // Option 2:
    /*
    this.tasks.mutate((tasks) => {
      const index = tasks.findIndex(task => task.id === updatedTask.id);
      tasks[index] = updatedTask;
    })
    */
  }
}
