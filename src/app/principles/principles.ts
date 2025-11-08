import { Component } from '@angular/core';
import { CodeBlock } from '../components/code-block/code-block';
import { csharpBadIfCheck, csharpBetterIfCheck } from '../scripts/scripts';
import { ContentHeader } from '../components/content-header/content-header';

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
    <p>
      There are many wrong ways to declare a function, name a variable, or implement a class. We'll
      never be perfect, but we can make sure our code is legible to the next developer.
    </p>
    <p class="mb-4">
      Simple if checks, for example. You can do everything in one line, if you want (and just
      learned LINQ):
    </p>
    <db-code-block title="badIfCheck.cs" [script]="csharpBadIfCheck" />
    <p class="mb-4">
      But I'd prefer the code to be legible to the next developer (which will probably be myself a
      month later). So lets make it legible:
    </p>
    <db-code-block title="betterIfCheck.cs" [script]="csharpBetterIfCheck" />
    <p>
      It's not rocket science, because it shouldn't be. Simple practices like this compound over
      time, and create a far better codebase for future developers.
    </p>

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
      <a href="https://github.com/Bonk4/dombrazeel">built this portfolio</a> with compositional
      classes, reusable components, and encourage you to check me on that. After all, our code is
      only as good as the next developer says it is.
    </p>
  `,
  styles: ``,
})
export class Principles {
  protected readonly csharpBadIfCheck = csharpBadIfCheck;
  protected readonly csharpBetterIfCheck = csharpBetterIfCheck;
}
