import { Component, input } from '@angular/core';

@Component({
  selector: "counter",
  standalone: true,
  template: ` <div class="col"><h1>Counter value: {{ value() }}</h1></div>`,
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  value = input.required<number>();
}

