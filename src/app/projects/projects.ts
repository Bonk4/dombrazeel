import { Component } from '@angular/core';
import { Card } from '../components/card/card';
import { ContentHeader } from '../components/content-header/content-header';

@Component({
  selector: 'db-projects',
  imports: [Card, ContentHeader],
  template: `
    <db-content-header>Projects</db-content-header>
    <div class="flex-row justify-around">
      <db-card
        class="card-container"
        title="I Cast Fireball!"
        desc="A DnD initiative tracker"
        background="red"
        href="https://icastfireball-angular.vercel.app/"
      />
      <db-card
        class="card-container"
        title="Game Suite"
        desc="A collection of simple games, built in Angular."
        background="purple"
        href="https://checkers-ng.vercel.app/"
      />
      <db-card
        class="card-container"
        title="Pong 2"
        desc="Pong of the future.  3D test project built in Godot."
        background="green"
        href="https://north-pathway.itch.io/circle-pong"
      />
    </div>
  `,
  styles: `
    .card-container {
      width: 32%;
    }
  `,
})
export class Projects {}
