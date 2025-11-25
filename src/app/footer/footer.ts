import { Component } from '@angular/core';

@Component({
  selector: 'db-footer',
  imports: [],
  template: `
    <div class="page-section m-0 footer bg-black border-top">
      <div class="content row justify-center mt-2 mb-2 flex-wrap gap-1">
        <p class="mono font-sm text-center m-0">
          Coded in
          <span class="mono no-wrap">
            {{ '{{' }} <span class="text-grey">new </span
            ><span class="text-blue">Date</span>().<span class="text-green">getFullYear</span>()
            {{ '}} ' }}
          </span>
          by Dominic Brazeel &#129304;
        </p>
      </div>
    </div>
  `,
  styles: ``,
})
export class Footer {}
