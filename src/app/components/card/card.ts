import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'db-card',
  imports: [NgClass],
  template: `
    <div class="card border border-rounded" [ngClass]="{ 'card-image': img() !== undefined }">
      @if (img() !== undefined) {
        <img class="card-image border-top-rounded" [src]="img()" alt="picture" />
      }
      <div class="p-2">
        <h2>{{ title() }}</h2>
        <p class="text-grey">{{ desc() }}</p>
      </div>
    </div>
  `,
  styles: ``,
})
export class Card {
  title = input<string>('');
  desc = input<string>('');
  img = input<string | undefined>(undefined);

  imageCardWidth: number = 9.375;
}
