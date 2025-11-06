import { Component } from '@angular/core';
import { ContentHeader } from '../../components/content-header/content-header';

@Component({
  selector: 'db-about-me',
  imports: [ContentHeader],
  template: `
    <db-content-header>About Me</db-content-header>
    <p>
      I'm a full-stack web developer based in Kansas City. I've been developing web applications
      professionally since 2014, utilizing a variety of .NET and NodeJS tools. I love good beer,
      metalcore, and clean code.
    </p>
  `,
  styles: ``,
})
export class AboutMe {}
