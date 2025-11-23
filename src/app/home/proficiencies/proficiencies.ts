import { Component } from '@angular/core';
import { CodeBlock } from '../../components/code-block/code-block';
import { csharpHelloWorld, sqlHelloWorld, typescriptHelloWorld } from '../../scripts/scripts';
import { Script } from '../../components/code-block/models/script';

@Component({
  selector: 'db-proficiencies',
  imports: [CodeBlock],
  template: `
    <div
      class="row justify-stretch flex-wrap languages mono bg-purple b-1 border-rounded of-hidden"
    >
      <div class="text-center bg-blue">TS</div>
      <div class="text-center bg-orange">JS</div>
      <div class="text-center bg-purple">C#</div>
      <div class="text-center bg-red">SQL</div>
    </div>

    <db-code-block [scripts]="scripts" />
  `,
  styles: `
    .languages > div {
      font-size: 2.5rem;
      width: 25%;
    }
    @media (max-width: 800px) {
      .languages > div {
        width: 50%;
      }
    }
  `,
})
export class Proficiencies {
  scripts: Script[] = [csharpHelloWorld, typescriptHelloWorld, sqlHelloWorld];
}
