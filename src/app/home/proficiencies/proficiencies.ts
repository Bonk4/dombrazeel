import { Component } from '@angular/core';
import { CodeBlock } from '../../components/code-block/code-block';
import { csharpHelloWorld, sqlHelloWorld, typescriptHelloWorld } from '../../scripts/scripts';
import { Script } from '../../components/code-block/models/script';

@Component({
  selector: 'db-proficiencies',
  imports: [CodeBlock],
  template: `
    <!--    <db-content-header>Proficiencies</db-content-header>-->
    <div class="mt-lg"></div>
    <div
      class="row justify-around languages mono bg-purple b-1 border-secondary border-rounded of-hidden"
    >
      <p class="m-0 w-full text-center bg-blue">TS</p>
      <p class="m-0 w-full text-center bg-orange">JS</p>
      <p class="m-0 w-full text-center bg-purple">C#</p>
      <p class="m-0 w-full text-center bg-red">SQL</p>
    </div>

    <db-code-block [scripts]="scripts" />
  `,
  styles: `
    .languages > p {
      font-size: 2.5rem;
    }
  `,
})
export class Proficiencies {
  scripts: Script[] = [csharpHelloWorld, sqlHelloWorld, typescriptHelloWorld];
}
