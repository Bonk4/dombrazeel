import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'db-card',
  imports: [NgClass],
  template: `
    <div
      class="card border border-rounded"
      [ngClass]="{
        'card-image': img() !== undefined,
        'bg-red': background() === 'red',
        'bg-orange': background() === 'orange',
      }"
    >
      @if (img() !== undefined) {
        <img class="card-image border-top-rounded" [src]="img()" alt="picture" />
      }
      <div class="p-lg">
        <h3 class="mt-0">{{ title() }}</h3>
        <p class="text-grey font-sm">{{ desc() }}</p>
      </div>
    </div>
  `,
  styles: `
    .card {
      background-color: var(--black);
    }
    .bg-red:hover {
      background-color: var(--red);
      -webkit-transition: background-color 1000ms linear;
      -ms-transition: background-color 1000ms linear;
      transition: background-color 1000ms linear;
    }
    .card > .bg-orange:hover {
      background-color: var(--orange);
      -webkit-transition: background-color 1000ms linear;
      -ms-transition: background-color 1000ms linear;
      transition: background-color 1000ms linear;
    }
  `,
})
export class Card {
  title = input<string>('');
  desc = input<string>('');
  img = input<string | undefined>(undefined);
  background = input<'red' | 'orange' | undefined>(undefined);

  imageCardWidth: number = 9.375;
}
