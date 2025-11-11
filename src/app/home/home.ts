import { Component } from '@angular/core';
import { Proficiencies } from './proficiencies/proficiencies';
import { AboutMe } from './about-me/about-me';
import { Avatar } from '../components/avatar/avatar';

@Component({
  selector: 'db-home',
  imports: [Proficiencies, AboutMe, Avatar],
  template: `
    <div class="avatar m-header mr-3xl d-none">
      <db-avatar
        img="img/halloween_2025_zoomed.png"
        alt="Dominic at a halloween party, 2025"
        [size]="'lg'"
      />
    </div>

    <db-about-me />

    <db-proficiencies />
  `,
  styles: ``,
})
export class Home {}
