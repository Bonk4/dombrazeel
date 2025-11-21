import { Component } from '@angular/core';
import { ContentHeader } from '../../components/content-header/content-header';
import { Avatar } from '../../components/avatar/avatar';

@Component({
  selector: 'db-about-me',
  imports: [ContentHeader, Avatar],
  template: `
    <db-content-header>About Me</db-content-header>
    <div>
      <db-avatar
        img="img/avatar_cropped.jpg"
        alt="Dominic at a halloween party, 2025"
        [size]="'lg'"
        class="float-left mr-xl"
      />
      <p>
        I'm a full-stack web developer based in Kansas City. I've been developing web applications
        professionally since 2014, utilizing a variety of .NET and NodeJS tools. I love craft beer,
        heavy metal, and clean code.
      </p>
      <p>
        I've worked on a variety of projects over the years, all web, server, or database oriented.
        When I get free time to develop at home, I work on <a href="/projects">projects</a> to
        integrate with my DnD games, amateur game projects, or just learn the new hotness in the
        development world. I always keep a unit test project handy to test .NET features and tricks
        before I implement them.
      </p>
      <p>
        If I'm not writing code, I'm probably at a concert or supporting a brewery somewhere in
        Kansas City. I've worked as a local beer-tender, and know many local brewers in the Kansas
        City area. I'm an avid metalhead and hardcore music fan, and am always looking for local
        shows. Some of my favorite bands are <span class="italic">Spiritbox</span>,
        <span class="italic">August Burns Red</span>, and the
        <span class="italic">Dead Kennedys</span>.
      </p>
    </div>
  `,
  styles: ``,
})
export class AboutMe {}
