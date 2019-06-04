import { Component, ChangeDetectorRef, Inject } from "@angular/core";

@Component({
    selector: 'AdminApp',
    template: `
    <p>Teste</p>
      `,
  })
export default class AdminApp {
    message: string = "Message from React should appear here 😱";

    constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef) {
    }

    
}