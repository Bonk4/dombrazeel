import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Button } from '../button/button';

@Component({
  selector: 'db-card',
  imports: [NgClass, Button],
  template: `
    <div
      class="card border border-rounded"
      [ngClass]="{
        'card-image': img() !== undefined,
        'red-card': background() === 'red',
        'purple-card': background() === 'purple',
        'green-card': background() === 'green',
        'blue-card': background() === 'blue',
      }"
      (click)="redirect()"
    >
      @if (img() !== undefined) {
        <img class="card-image border-top-rounded" [src]="img()" alt="picture" />
      }
      <div class="p-lg">
        <h3 class="mt-0 mono w-full">
          @if (icon() !== undefined) {
            <span class="fa-solid fa-{{ icon() }}"></span>
          }
          {{ title() }}
        </h3>
        <p class="text-grey font-sm">
          <ng-content></ng-content>
        </p>
        <div class="desktop-hidden h-full w-full flex align-flex-end justify-center">
          <db-button (click)="redirect()" type="secondary" [stretch]="true" class="w-full"
            >Visit <i class="fa-solid fa-link"></i
          ></db-button>
        </div>
      </div>
    </div>
  `,
  styles: `
    @property --c {
      syntax: '<color>';
      inherits: false;
      initial-value: black;
    }
    .card {
      transition: --c 0.5s;
      min-width: 15rem;
      background: linear-gradient(transparent 20%, var(--c));
    }
    .card:hover {
      cursor: pointer;
      --c: var(--primary);
    }
    .red-card:hover {
      --c: var(--primary) !important;
    }
    .purple-card:hover {
      --c: var(--purple) !important;
    }
    .green-card:hover {
      --c: var(--green) !important;
    }
    .blue-card:hover {
      --c: var(--blue) !important;
    }
  `,
})
export class Card {
  title = input<string>('');
  desc = input<string>('');
  icon = input<string | undefined>(undefined);
  img = input<string | undefined>(undefined);
  background = input<'red' | 'purple' | 'green' | 'blue' | undefined>(undefined);
  href = input<string | undefined>(undefined);

  imageCardWidth: number = 9.375;

  redirect() {
    if (this.href() !== undefined) {
      window.open(this.href(), '_blank');
    }
  }
}
