import { Component } from '@angular/core';
import { CodeBlock } from '../../components/code-block/code-block';
import { csharpHelloWorld, sqlHelloWorld, typescriptHelloWorld } from '../../scripts/scripts';
import { ContentHeader } from '../../components/content-header/content-header';
import { Script } from '../../components/code-block/models/script';

@Component({
  selector: 'db-proficiencies',
  imports: [CodeBlock, ContentHeader],
  template: `
    <db-content-header>Proficiencies</db-content-header>

    <div
      class="flex-row justify-around languages mono bg-purple b-1 border-secondary border-rounded of-hidden"
    >
      <p class="m-0 w-full text-center bg-blue">TS</p>
      <p class="m-0 w-full text-center bg-orange">JS</p>
      <p class="m-0 w-full text-center bg-purple">C#</p>
      <p class="m-0 w-full text-center bg-red">SQL</p>
    </div>

    <db-code-block [scripts]="scripts" />

    <div>
      <div class="initial">C#</div>
      <p class="mt-3">
        is my bread and butter, and .NET rules. If I write an API, serverside app, or game project
        in Godot, I default to writing in C#.
      </p>
      <p>
        When I started writing .NET, it was in the now-labeled .NET Framework. Since, it's matured
        into Core and now just .NET, and gotten all the better in the meantime. Object-oriented
        languages have many benefits, and I prefer to write in C# when working in a team
        environment. Registering classes, implementing interfaces, and extending types have never
        been easier than in .NET.
      </p>
    </div>
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
