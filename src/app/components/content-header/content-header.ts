import { Component } from '@angular/core';

@Component({
  selector: 'db-content-header',
  imports: [],
  template: `
    <h2 class="text-yellow">
      <span class="highlight-underline-purple pl-3 pr-3">
        <ng-content />
      </span>
    </h2>
  `,
  styles: ``,
})
export class ContentHeader {}
