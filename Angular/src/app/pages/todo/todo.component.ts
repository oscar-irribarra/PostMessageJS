import { Component, DestroyRef, inject } from '@angular/core';
import { CONFIG } from '../../config/config';
import { filter, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styles: ``,
})
export class TodoComponent {
  readonly destroyRef = inject(DestroyRef);

  openTodoPage() {
    window.open(`${CONFIG.MESSAGE_ORIGIN_TODO}/todo`, '_blank');

    fromEvent<MessageEvent>(window, 'message')
      .pipe(filter((event) => event.origin === CONFIG.MESSAGE_ORIGIN_TODO))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        console.log(event);
      });
  }
}
