import { Component } from '@angular/core';
import { CodeBlock } from '../components/code-block/code-block';
import { csharpBadIfCheck, csharpBetterIfCheck } from '../scripts/scripts';
import { ContentHeader } from '../components/content-header/content-header';
import { Script } from '../components/code-block/models/script';

@Component({
  selector: 'db-principles',
  imports: [CodeBlock, ContentHeader],
  template: `
    <db-content-header>Code should be human-readable.</db-content-header>
    <p>
      It's proven that
      <a href="https://www.google.com/search?q=code+is+harder+to+read+than+it+is+to+write"
        >code is harder to read than it is to write</a
      >. My primary focus is always developer-first code that is easy to read and maintain. Whatever
      language that may be.
    </p>

    <db-code-block [scripts]="ifChecks" />

    <db-content-header>Build the web one class at a time.</db-content-header>
    <p>
      As developers, the less CSS we write, the happier we are. Tailwind is growing in popularity
      because many developers know CSS fundamentals, but hate re-writing it. Apps should be built
      with solid fundamental classes and components, and extend for exceptions instead of the norm.
      And the libraries we build on top of them should utilize those classes instead of re-writing
      them.
    </p>
    <p>
      With this in mind, I try to live what I preach. I
      <a href="https://github.com/Bonk4/dombrazeel">built my portfolio</a> with compositional
      classes, reusable components, and encourage you to check me on that. After all, our code is
      only as good as the next developer says it is.
    </p>

    <db-content-header>AI is here to stay.</db-content-header>
    <p>
      AI is a part of our development landscape, whether we like it or not. As developers, it's our
      job to understand how our code works, whether it was written by ourselves, a coworker, or an
      LLM.
    </p>
  `,
  styles: ``,
})
export class Principles {
  badIfCheck: Script[] = [{ name: 'badIfCheck.cs', code: csharpBadIfCheck }];
  betterIfCheck: Script[] = [{ name: 'betterIfCheck.cs', code: csharpBetterIfCheck }];
  ifChecks: Script[] = [...this.badIfCheck, ...this.betterIfCheck];
}
