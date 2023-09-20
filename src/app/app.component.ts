import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<app-tasks></app-tasks>`,
  styles: [
    `
      :host {
        display: block;
        height: 100vh;
        background: linear-gradient(to right, #acb6e5, #86fde8);
      }
    `,
  ],
})
export class AppComponent {}
