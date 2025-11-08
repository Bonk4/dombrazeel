import { Component } from '@angular/core';
import { ContentHeader } from './content-header/content-header';

@Component({
  selector: 'db-landing',
  imports: [ContentHeader],
  template: `
    <db-content-header>Welcome to my Component Library!</db-content-header>
    <p>
      Hopefully you came here from
      <a href="https://www.dombrazeel.dev/" target="_blank">my portfolio</a>. Either way, welcome!
      My name is
      <span class="text-yellow highlight-underline-purple pl-2 pr-2">Dominic Brazeel</span> and this
      is a component library I made to help me build web applications, specifically my portfolio.
    </p>
    <p>
      I'm a big proponent of reusable components, compositional class structure, and learning by
      doing. My portfolio was built using these Angular components, and my own CSS library. Feel
      free to look over my
      <a href="https://github.com/Bonk4/dombrazeel/tree/main/src/styles" target="_blank"
        >class structure on GitHub</a
      >.
    </p>
    <p>
      I build my classes as they're needed. I took heavy inspiration from Tailwind, and built them
      out in a way that I could access them easily whenever I needed them. Many devs know CSS, and
      hate re-writing styles over and over. This structure allows me to write as little CSS as
      possible, and still alter it over time.
    </p>

    <db-content-header>Core Tenants</db-content-header>
    <ul>
      <li>Common CSS styles should be accessible via obvious class names.</li>
      <li>Scalable sizes should be dictated by CSS variables.</li>
    </ul>
  `,
  styles: ``,
})
export class Landing {}
