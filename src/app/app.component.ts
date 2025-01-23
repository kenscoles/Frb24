import { Component, HostListener, VERSION, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component'
import {MatButtonModule} from '@angular/material/button'
import { sum } from './util';
import { HelloComponent } from './hello/hello.component';

@Component({
    selector: 'app-root',
    imports: [CounterComponent, HelloComponent, MatButtonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  
  rects = ['100%', '50%', '25%'];
  title = 'Frb24';
  name = this.title + ' Angular ' + VERSION.major;
  public screenWidth = 0;
  public screenHeight = 0;
  count=0;
  value = signal(this.count+4)
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
  @HostListener('window:resize', ['$event'])

  onResize(event: any) {

    this.screenWidth = window.innerWidth;

    this.screenHeight = window.innerHeight;

  }


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