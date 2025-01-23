import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  template: `<h1>Hello {{name()}}!</h1>`,
  styles: [`h1 { font-family: Verdana; }`]
})
export class HelloComponent {
name = input.required<string>();
}
