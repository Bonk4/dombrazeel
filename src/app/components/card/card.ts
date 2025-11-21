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
        'red-card': background() === 'red',
        'purple-card': background() === 'purple',
        'green-card': background() === 'green',
      }"
      (click)="redirect()"
    >
      @if (img() !== undefined) {
        <img class="card-image border-top-rounded" [src]="img()" alt="picture" />
      }
      <div class="p-lg">
        <h3 class="mt-0 semi-bold">{{ title() }}</h3>
        <p class="text-grey font-sm"><ng-content /></p>
      </div>
    </div>
  `,
  styles: `
    .card {
      background-color: var(--black);
      -webkit-transition: background-color 500ms linear;
      -ms-transition: background-color 500ms linear;
      transition: background-color 500ms linear;
    }
    .card:hover {
      cursor: pointer;
      background-color: var(--pink);
      -webkit-transition: background-color 500ms linear;
      -ms-transition: background-color 500ms linear;
      transition: background-color 500ms linear;
    }
    .red-card:hover {
      background-color: var(--primary) !important;
    }
    .purple-card:hover {
      background-color: var(--purple) !important;
    }
    .green-card:hover {
      background-color: var(--dark-green) !important;
    }
  `,
})
export class Card {
  title = input<string>('');
  desc = input<string>('');
  img = input<string | undefined>(undefined);
  background = input<'red' | 'purple' | 'green' | undefined>(undefined);
  href = input<string | undefined>(undefined);

  imageCardWidth: number = 9.375;

  redirect() {
    if (this.href() !== undefined) {
      window.open(this.href(), '_blank');
    }
  }
}
