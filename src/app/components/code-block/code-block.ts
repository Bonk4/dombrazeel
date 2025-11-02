import { Component, input } from '@angular/core';

@Component({
  selector: 'db-code-block',
  imports: [],
  template: `
    @if (title() !== undefined) {
      <h4>{{ title() }}</h4>
    }
    <div class="border border-rounded bg-black w-full h-full">
      <div class="mono p-2">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: ``,
})
export class CodeBlock {
  title = input<string | undefined>(undefined);
}
