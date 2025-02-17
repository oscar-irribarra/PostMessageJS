import { Component } from '@angular/core';
import { ReactCounterComponent } from '../../components/react-counter/react-counter.component';

@Component({
  selector: 'app-counter',
  imports: [ReactCounterComponent],
  templateUrl: './counter.component.html',
  styles: ``,
  standalone: true,
})
export class CounterComponent {
  counters = Array.from({ length: 1 }, (_, i) => i + 1);
}
