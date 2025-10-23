import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="page">
      <h1>Dominic Brazeel</h1>
      <div class="flex-row justify-between">
        <p>Web Developer</p>
        <p>hardcore | metalcore | dotNET core</p>
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
