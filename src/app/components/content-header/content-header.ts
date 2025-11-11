import { Component } from '@angular/core';

@Component({
  selector: 'db-content-header',
  imports: [],
  template: `
    <div class="brush-stroke-underline">
      <h2 class="deathstinger text-secondary">
        <span class="pl-3xl pr-3">
          <ng-content />
        </span>
      </h2>
    </div>
  `,
  styles: `
    .brush-stroke-underline {
      overflow: visible;
      background-image: url('/img/brush-stroke-banner.png') !important;
      background-repeat: no-repeat;
      background-position: left;
      background-size: 300px 150px;
      background-position-x: -25px;
    }
  `,
})
export class ContentHeader {}
