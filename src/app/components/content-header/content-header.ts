import { Component } from '@angular/core';

@Component({
  selector: 'db-content-header',
  imports: [],
  template: `
    <h1 class="metal text-yellow">
      <span class="highlight-underline-purple pl-3 pr-3">
        <ng-content />
      </span>
    </h1>
  `,
  styles: ``,
})
export class ContentHeader {}
