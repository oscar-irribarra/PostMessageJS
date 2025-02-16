import { Injectable, DestroyRef, inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  readonly destroyRef = inject(DestroyRef);

  constructor() {}

  initializeMessageListener(origin: string, callback: (data: any) => void) {
    fromEvent<MessageEvent>(window, 'message')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        // Permitir solo mensajes del origen especificado
        if (event.origin !== origin) return;

        console.log('Mensaje recibido desde angular:', event.data);
        callback(event.data);
      });
  }

  sendMessage(iframe: HTMLIFrameElement, message: any) {
    if (iframe.contentWindow) {
      iframe.contentWindow.postMessage(message, '*');
    }
  }
}
