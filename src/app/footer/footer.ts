import { Component } from '@angular/core';

@Component({
  selector: 'db-footer',
  imports: [],
  template: `
    <div class="page-section m-0 footer bg-black border-top">
      <div class="content">
        <p class="mono font-sm">
          Coded in
          <span class="mono">
            {{ '{{' }} <span class="text-grey">new </span
            ><span class="text-blue">Date</span>().<span class="text-green">getFullYear</span
            >()</span
          >
          {{ '}}' }} by Dominic Brazeel &#129304;
        </p>
      </div>
    </div>
  `,
  styles: ``,
})
export class Footer {}
