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

    <div class="flex-row">
      <div class="w-50">
        <ul>
          <li>.NET Framework/Core</li>
          <ul>
            <li>Web APIs</li>
            <li>Server Apps</li>
            <li>Code-first database management with Entity Framework</li>
          </ul>
          <li>JavaScript/TypeScript</li>
          <li>JS Frameworks</li>
          <ul>
            <li>Angular</li>
            <li>AngularJS</li>
            <li>React</li>
          </ul>
          <li>SQL</li>
        </ul>
      </div>

      <div class="w-50">
        <db-code-block [scripts]="scripts" />
      </div>
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
