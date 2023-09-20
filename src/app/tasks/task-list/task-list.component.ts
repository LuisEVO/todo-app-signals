import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.interface';

@Component({
  selector: 'app-task-list',
  template: `
    <div
      class="item"
      *ngFor="let task of tasks"
      [class.item--active]="task.isComplete"
    >
      <div class="item__task">
        <input
          type="checkbox"
          [ngModel]="task.isComplete"
          (ngModelChange)="toggle.emit(task)"
        />
        <span>{{ task.description }}</span>
      </div>
      <div class="item__actions">
        <button>
          <span class="material-icons" (click)="remove.emit(task.id)"
            >delete</span
          >
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        background: white;
        border-radius: 0.25rem;

        .item {
          padding: 1rem;
          display: flex;
          justify-content: space-between;

          &:not(:last-child) {
            border-bottom: 1px solid #e9e9e9;
          }

          &--active > div > span {
            text-decoration: line-through;
          }

          &__task {
            display: flex;
            flex-grow: 1;
            gap: 1rem;
            align-items: center;

            & > input[type='checkbox'] {
              margin: 0;
              transform: scale(1.5);
            }

            & > input[type='text'] {
              border-radius: 0.25rem;
              border: 1px solid #e9e9e9;
              outline: unset;
            }
          }

          &__actions {
            display: flex;
            gap: 0.5rem;

            button {
              display: grid;
              border: 0;
              background: transparent;
              padding: 0;
            }
          }
        }
      }
    `,
  ],
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  @Output() remove: EventEmitter<number> = new EventEmitter();
  @Output() toggle: EventEmitter<Task> = new EventEmitter();
}
