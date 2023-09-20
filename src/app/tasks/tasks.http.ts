import { Injectable } from '@angular/core';
import { Task, TaskDTO } from './task.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksHttp {
  private endpoint = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Task[]>(this.endpoint);
  }

  create(task: TaskDTO) {
    return this.http.post<Task>(this.endpoint, task);
  }

  update(id: number, task: TaskDTO) {
    return this.http.put<Task>(`${this.endpoint}/${id}`, task);
  }

  delete(id: number) {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
