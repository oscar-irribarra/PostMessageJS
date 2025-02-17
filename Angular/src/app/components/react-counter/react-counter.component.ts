import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MessageService } from '../../services/message.service';
import { CONFIG } from '../../config/config';

@Component({
  selector: 'app-react-counter',
  templateUrl: './react-counter.component.html',
  styles: `
    iframe {
      height: 300px;
    }
  `,
})
export class ReactCounterComponent implements AfterViewInit {
  title = 'Angular';
  @ViewChild('iframe') iframe!: ElementRef<HTMLIFrameElement>;

  counterFromReact = 0;
  iframeSrc: SafeResourceUrl;

  constructor(
    private messageService: MessageService,
    private sanitizer: DomSanitizer
  ) {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      CONFIG.MESSAGE_ORIGIN_COUNTER
    );
  }

  ngAfterViewInit() {
    this.iframe.nativeElement.onload = () => {
      this.messageService.sendMessage(this.iframe.nativeElement, {
        counter: 0,
      });

      this.messageService.initializeMessageListener(
        CONFIG.MESSAGE_ORIGIN_COUNTER,
        (data) => {
          this.counterFromReact = data.counter;
        }
      );
    };
  }

  sendRandomNumber() {
    const random = Math.floor(Math.random() * 100);
    this.messageService.sendMessage(this.iframe.nativeElement, {
      counter: random,
    });
  }
}
