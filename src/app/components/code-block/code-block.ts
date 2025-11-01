import { Component, input } from '@angular/core';

@Component({
  selector: 'db-code-block',
  imports: [],
  template: `
    <div class="outline-1 outline-grey">
      <pre>
        <ng-content></ng-content>
      </pre>
    </div>
  `,
  styles: ``,
})
export class CodeBlock {
  // code = input<string>('');
}
