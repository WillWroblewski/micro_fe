import { Component, ChangeDetectorRef, Inject } from "@angular/core";

@Component({
    selector: 'NavApp',
    template: `
      <nav>
        <ul>
          <li><a href="#">Link 1</a>
          <li><a href="#">Link 2</a>
        </ul>
      </nav>
      `,
  })
export default class NavApp {
    message: string = "Message from React should appear here 😱";

    constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef) {
    }

    
}