import { Component, OnInit } from '@angular/core';
import { Task, TaskDTO } from './task.interface';
import { TasksService } from './tasks.service';
import { TasksHttp } from './tasks.http';
import { tap } from 'rxjs';
import { TasksSignalService } from './tasks-signal.service';

@Component({
  selector: 'app-tasks',
  template: `
    <app-task-form (add)="add($event)"></app-task-form>
    <app-task-list
      [tasks]="tasks()"
      (remove)="remove($event)"
      (toggle)="toggle($event)"
    ></app-task-list>
  `,
  styles: [
    `
      :host {
        max-width: 40rem;
        margin: auto;
        padding: 1rem;
        display: grid;
        gap: 1rem;
      }
    `,
  ],
})
export class TasksComponent implements OnInit {
  get tasks() {
    return this.tasksService.tasks;
  }

  constructor(
    private tasksHttp: TasksHttp,
    private tasksService: TasksSignalService
  ) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.tasksHttp
      .list()
      .pipe(tap((res) => this.tasksService.set(res)))
      .subscribe();
  }

  add(description: string) {
    const taskDTO: TaskDTO = {
      description,
      isComplete: false,
    };
    this.tasksHttp
      .create(taskDTO)
      .pipe(tap((res) => this.tasksService.add(res)))
      .subscribe();
  }

  toggle({ id, ...task }: Task) {
    const taskDTO: TaskDTO = {
      ...task,
      isComplete: !task.isComplete,
    };
    this.tasksHttp
      .update(id, taskDTO)
      .pipe(tap((res) => this.tasksService.update(res)))
      .subscribe();
  }

  remove(id: number) {
    this.tasksHttp
      .delete(id)
      .pipe(tap((_) => this.tasksService.delete(id)))
      .subscribe();
  }
}
