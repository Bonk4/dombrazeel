import { Component } from '@angular/core';
import { Proficiencies } from './proficiencies/proficiencies';
import { AboutMe } from './about-me/about-me';

@Component({
  selector: 'db-home',
  imports: [Proficiencies, AboutMe],
  template: `
    <db-about-me />

    <db-proficiencies />
  `,
  styles: ``,
})
export class Home {}
