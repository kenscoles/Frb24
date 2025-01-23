import { Component, input } from '@angular/core';

@Component({
  selector: "counter",
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  value = input.required<number>();
}

