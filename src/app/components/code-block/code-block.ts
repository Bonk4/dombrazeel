import { Component, input } from '@angular/core';

@Component({
  selector: 'db-code-block',
  imports: [],
  template: `
    @if (title() !== undefined) {
      <h4>{{ title() }}</h4>
    }
    <div class="border border-rounded bg-dark-grey">
      <pre class="p-2">
        <ng-content></ng-content>
      </pre>
    </div>
  `,
  styles: ``,
})
export class CodeBlock {
  title = input<string | undefined>(undefined);
}
