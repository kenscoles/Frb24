import { Component, input } from '@angular/core';

@Component({
  selector: "counter",
  standalone: true,
  template: ` <h1>Counter value: {{ value() }}</h1>`,
})
export class CounterComponent {
  value = input.required<number>();
}

