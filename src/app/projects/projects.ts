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
      times over the years to use while I run tabletop games like
      <span class="italic">Dungeons and Dragons</span>. Aside from building web apps to learn new
      frameworks and ideas, I love playing around in Godot with C#.
    </p>
    <div class="row justify-end">
      <p>
        <a href="https://github.com/Bonk4/">Dominic Brazeel | GitHub</a>
        <i class="fa-brands fa-github ml-2"></i>
      </p>
    </div>

    <div class="row flex-wrap gap-2 mt-5 mb-5">
      <db-card
        class="card-container"
        title="Portfolio Source"
        icon="palette"
        background="blue"
        href="https://github.com/Bonk4/dombrazeel"
      >
        If you want to see the source code for my portfolio, this is it! With inspiration from
        modern frameworks like Tailwind and Prime, I used compositional classes to build out my
        style library in pure CSS. Everything else is HTML and Angular for my JS scripting.
      </db-card>
      <db-card
        class="card-container"
        title="Portfolio Library"
        icon="paintbrush"
        background="blue"
        href="https://dombrazeel-library.vercel.app"
      >
        This is the Storybook library for my portfolio. Here is where I developed and tested all the
        individual components used here. Storybook is one of my favorite tools for building and
        testing web components. I find developing in it first exposes poorly coupled code, and
        improves the developer experience for frontend development.
      </db-card>
      <db-card
        class="card-container flex-grow-1"
        icon="fire"
        title="I Cast Fireball! (Angular)"
        background="red"
        href="https://icastfireball-angular.vercel.app/"
      >
        A DnD initiative tracker app. I typically learn new web frameworks with this app, and
        something about writing it never gets old. This the latest version of the app, which
        features drag'n'drop initiative slots, quick additions during fights, and an integrated copy
        of the original DnD 5E Monster Manual to quickly add monsters from the game with complete
        stats.
      </db-card>
      <db-card
        class="card-container flex-grow-1"
        icon="fire"
        title="I Cast Fireball! (NextJS)"
        background="red"
        href="https://icastfireball.vercel.app/"
      >
        This version of the app utilizes the Mantine component library, React, and NextJS.
      </db-card>

      <db-card
        class="card-container flex-grow-1"
        title="Ng Games"
        icon="gamepad"
        background="purple"
        href="https://checkers-ng.vercel.app/"
      >
        A collection of simple singleplayer games, built in Angular. I still come back to play
        checkers. I learned to simplify my styling with this app.
      </db-card>
      <db-card
        class="card-container flex-grow-1"
        title="Tic-Tac-Toe World Championship!"
        icon="hashtag"
        background="green"
        href="https://github.com/Bonk4/TicTacToe"
      >
        Prove your Tic-Tac-Toe ability to beat an AI opponent! This C# console app was built to
        practice game devlopment in a simple environment before trying my hand at Godot.
      </db-card>
      <db-card
        class="card-container flex-grow-1"
        title="Pong 2"
        icon="table-tennis-paddle-ball"
        background="green"
        href="https://north-pathway.itch.io/circle-pong"
      >
        Pong of the future. 3D test project built in Godot. Rough, but one of my few finished and
        playable games.
      </db-card>
    </div>
  `,
  styles: `
    .card-container {
      max-width: 26rem;
    }
  `,
})
export class Projects {}
