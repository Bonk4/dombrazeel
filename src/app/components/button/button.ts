import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'db-button',
  imports: [NgClass],
  template: `
    <button
      class="btn"
      [ngClass]="{
        'btn-primary': type() === 'primary',
        'btn-secondary': type() === 'secondary',
        'btn-link': type() === 'link',
        'w-full': stretch(),
      }"
    >
      <ng-content />
    </button>
  `,
  styles: ``,
})
export class Button {
  type = input<'primary' | 'secondary' | 'link'>('primary');
  stretch = input<boolean>(false);
}
