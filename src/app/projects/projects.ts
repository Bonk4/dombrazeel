import { Component } from '@angular/core';
import { Card } from '../components/card/card';
import { ContentHeader } from '../components/content-header/content-header';

@Component({
  selector: 'db-projects',
  imports: [Card, ContentHeader],
  template: `
    <db-content-header>Projects</db-content-header>
    <p>
      I love coding projects in my free time. My passions lie in web and game development. My
      favorite project, <span class="italic">I Cast Fireball!</span>, is an app I've built several
      times over the year to help run my DnD games. When I'm not building simple web apps to learn
      new frameworks and ideas, I love playing around in Godot.
    </p>
    <p>
      My favorite technologies are NodeJS and .NET Core. .NET gets better and better every year, and
      I feel like I'm always finding new features and libraries that I haven't used before. Since
      .NET 8, I haven't been able to go back from the syntax sugar and simple Dependency Injection
      it provides.
    </p>
    <p>
      These projects are a few of my favorites. None are perfect, but they all represent a step on
      my journey of self-improvement learning to code.
    </p>
    <div class="flex-row mb-5">
      <db-card
        class="card-container"
        title="I Cast Fireball!"
        background="red"
        href="https://icastfireball-angular.vercel.app/"
      >
        A DnD initiative tracker app. I've rebuilt this app several times, in AngularJS, React, and
        now Angular 20. Something about writing this app never gets old. This the latest version of
        the app, which allows drag'n'drop initiative slots, quick additions during fights, and an
        integrated copy of the original DnD 5E Monster Manual to quickly add monsters from the game
        with complete stats.
      </db-card>
      <db-card
        class="card-container"
        title="Ng Games"
        background="purple"
        href="https://checkers-ng.vercel.app/"
      >
        A collection of simple singleplayer games, built in Angular. This was my first project after
        getting used to using per-component stylings, and unfortunately it shows. Since this
        project, I've learned to utilize compositional classes. But it's a fun experiment to look
        back on, and I still go back to play checkers from time to time.
      </db-card>
      <db-card
        class="card-container"
        title="Tic-Tac-Toe World Championship!"
        background="green"
        href="https://github.com/Bonk4/TicTacToe"
      >
        Prove your ability to beat an (admittedly simple) AI opponent! This C# console app was built
        to practice game devlopment in a simple environment before trying my hand at Godot.
      </db-card>
    </div>
    <div class="flex-row">
      <db-card
        class="card-container"
        title="Pong 2"
        background="green"
        href="https://north-pathway.itch.io/circle-pong"
      >
        Pong of the future. 3D test project built in Godot.
      </db-card>
    </div>
  `,
  styles: `
    .card-container {
      width: 32%;
    }
  `,
})
export class Projects {}
