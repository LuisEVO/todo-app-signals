import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  template: `
    <form
      #Form="ngForm"
      class="todo-form"
      (ngSubmit)="add.emit(Form.value.description)"
    >
      <input
        class="todo-form__input"
        type="text"
        placeholder="Ingrese una nueva tarea"
        name="description"
        ngModel
      />
      <button class="todo-form__button" type="submit">
        <span class="material-icons">add</span>
      </button>
    </form>
  `,
  styles: [
    `
      .todo-form {
        display: flex;
        gap: 0.5rem;

        &__input {
          padding: 1rem;
          font-size: 1rem;
          width: 100%;
          border-radius: 0.25rem;
          border: 1px solid #e9e9e9;
          outline: unset;
        }

        &__button {
          width: 3rem;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: 0.25rem;
          font-size: 2rem;
          cursor: pointer;
        }
      }
    `,
  ],
})
export class TaskFormComponent {
  @Output() add: EventEmitter<string> = new EventEmitter();
}
