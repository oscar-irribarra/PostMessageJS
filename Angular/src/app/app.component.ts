import { Component } from '@angular/core';
import { ReactCounterComponent } from './components/react-counter/react-counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ReactCounterComponent],
  styleUrl: './app.component.css',
})
export class AppComponent {
  counters = Array.from({ length: 1 }, (_, i) => i + 1);
}
