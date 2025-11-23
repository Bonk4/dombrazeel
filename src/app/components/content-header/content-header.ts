import { Component } from '@angular/core';

@Component({
  selector: 'db-content-header',
  imports: [],
  template: `
    <div>
      <h2 class="deathstinger text-secondary relative brush-stroke-underline">
        <span class="pr-3">
          <ng-content />
        </span>
      </h2>
    </div>
  `,
  styles: `
    h2 {
      z-index: 1;
    }
    .brush-stroke-underline::after {
      pointer-events: none;
      z-index: -1;
      content: '';
      position: absolute;

      top: 0;
      left: -4rem;

      width: 300px;
      height: 115px;

      background-image: url('/img/brush-stroke-banner.png');
      background-repeat: no-repeat;
      background-size: 300px 150px;
      background-position: bottom left;
    }
  `,
})
export class ContentHeader {}
