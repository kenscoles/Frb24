import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component'
import {MatButtonModule} from '@angular/material/button'
import { sum } from './util';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CounterComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frb24';
  count=0;
  value = signal(this.count+4)

  inc(){
    this.count +=1
    this.value.set(sum(this.count,4))
  }

  dec(){
    this.count -=1
    this.value.set(sum(this.count,4))
  }
 
  //this.value = sum(this.count,4)
  
}
// ng deploy --base-href=/Frb24/