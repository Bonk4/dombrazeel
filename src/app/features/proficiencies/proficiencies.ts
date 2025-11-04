import { Component } from '@angular/core';
import { CodeBlock } from '../../components/code-block/code-block';
import { csharpHelloWorld, sqlHelloWorld, typescriptHelloWorld } from '../../scripts/scripts';

@Component({
  selector: 'db-proficiencies',
  imports: [CodeBlock],
  template: `
    <h2 class="text-orange" id="proficiencies">Proficiencies</h2>
    <div class="flex-row justify-around languages bg-purple border-rounded of-hidden">
      <p class="w-full text-center bg-purple">C#</p>
      <p class="w-full text-center bg-blue">TS</p>
      <p class="w-full text-center bg-orange">JS</p>
      <p class="w-full text-center bg-red">SQL</p>
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
        <db-code-block title="helloWorld.cs" [script]="csharpHelloWorld" />
        <db-code-block title="helloWorld.ts" [script]="typescriptHelloWorld" />
        <db-code-block title="helloWorld.sql" [script]="sqlHelloWorld" />
      </div>
    </div>
  `,
  styles: `
    .languages {
      font-family: 'JB Mono', monospace;
      font-weight: 900;
    }
    .languages > p {
      margin: 0;
      font-size: 2.5rem;
    }
  `,
})
export class Proficiencies {
  protected readonly sqlHelloWorld = sqlHelloWorld;
  protected readonly csharpHelloWorld = csharpHelloWorld;
  protected readonly typescriptHelloWorld = typescriptHelloWorld;
}
