import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './components/button/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button],
  template: `
    <div class="page">
      <h1>Dominic Brazeel</h1>
      <div class="flex-row justify-between">
        <p>Web Developer</p>
        <p>hardcore | metalcore | dotNET core</p>
      </div>
      <div class="flex-row justify-between">
        <div class="flex-row justify-start">
          <db-button type="link" class="mr-3">About</db-button>
          <db-button type="link" class="mr-3">Technologies</db-button>
          <db-button type="link" class="mr-3">Design Library</db-button>
          <db-button type="link" class="mr-3">Projects</db-button>
        </div>
      </div>
      <!-- TODO:
        - skills
        - technologies
        - projects (dnd, checkers)
      -->
    </div>
  `,
  styles: `
    .page {
      max-width: 1000px;
      margin: 0 auto;
    }
  `,
})
export class App {}
