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
      outline: 5px #4e648e solid;
    }
    .sm {
      height: 3rem;
      width: 3rem;
    }
    .md {
      height: 5rem;
      width: 5rem;
    }
    .lg {
      height: 7rem;
      width: 7rem;
    }
  `,
})
export class Avatar {
  img = input<string>('');
  alt = input<string>('');
  size = input<'sm' | 'md' | 'lg'>('md');
}
