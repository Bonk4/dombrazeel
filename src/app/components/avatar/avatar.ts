import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'db-avatar',
  imports: [NgClass],
  template: `
    <img
      [ngClass]="{ sm: size() === 'sm', md: size() === 'md', lg: size() === 'lg' }"
      [alt]="alt()"
      [title]="alt()"
      [src]="img()"
    />
  `,
  styles: `
    img {
      border-radius: 5rem;
      outline: 6px var(--primary) solid;
    }
    /*mobile*/
    @media (min-width: 800px) {
      .sm {
        height: 3rem;
        width: 3rem;
      }
      .md {
        height: 5rem;
        width: 5rem;
      }
      .lg {
        height: 150px;
        width: 150px;
      }
    }
    /*desktop*/
    @media (max-width: 800px) {
      .sm {
        height: 3rem;
        width: 3rem;
      }
      .md {
        height: 5rem;
        width: 5rem;
      }
      .lg {
        height: 90px;
        width: 90px;
      }
    }
  `,
})
export class Avatar {
  img = input<string>('');
  alt = input<string>('');
  size = input<'sm' | 'md' | 'lg'>('md');
}
