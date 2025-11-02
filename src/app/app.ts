import { Component, inject } from '@angular/core';
import { Projects } from './features/projects/projects';
import { Avatar } from './components/avatar/avatar';
import { CodeBlock } from './components/code-block/code-block';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [Projects, Avatar, CodeBlock],
  template: `
    <div class="page-section bg-dark-grey">
      <div class="content">
        <div class="flex-row justify-start mb-5">
          <div class="avatar m-header mr-3xl">
            <db-avatar
              img="img/halloween_2025_zoomed.png"
              alt="me as a wizard at a halloween party, 2025"
              [size]="'lg'"
            />
          </div>
          <div class="m-header w-full">
            <h1 class="mt-0 mb-0">Dominic Brazeel</h1>
            <div class="flex-row justify-between mt-0 mb-0">
              <p class="mt-0 italic">Senior Web Developer</p>
              <p class="mt-0">hardcore | metalcore | dotNET core</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-section header pt-3 bg-dark-grey border-bottom sticky">
      <div class="content mb-3 mt-3">
        <div class="flex-row justify-between">
          <div class="flex-row justify-start bold">
            <a class="nav-link text-yellow mr-3" href="#about">About</a>
            <a class="nav-link text-orange mr-3" href="#proficiencies">Proficiencies</a>
            <a class="nav-link text-red mr-3" href="#">Design Library</a>
            <a class="nav-link text-pink mr-3" href="#db-projects">Projects</a>
            <a class="nav-link text-purple mr-3" href="#db-projects">Thing 1</a>
            <a
              class="nav-link text-blue mr-3"
              href="https://www.linkedin.com/in/dominic-brazeel-a6922584/"
              >LinkedIn</a
            >
            <a class="nav-link text-dark-green mr-3" href="#" (click)="downloadResume()">Resume</a>
          </div>
        </div>
      </div>
    </div>

    <div class="page-section">
      <div class="content">
        <h2 class="text-yellow" id="about">About Me</h2>
        <p>
          I'm a full-stack web developer based in Kansas City. I've been developing web applications
          professionally since 2014, utilizing a variety of .NET and NodeJS tools. I love beer,
          metalcore, and clean code.
        </p>

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
            <db-code-block title="helloWorld.cs">
              public class Program &lcub; Console.Print('hello, world!'); &rcub;
            </db-code-block>
            <db-code-block title="helloWorld.ts">
              &lcub; console.log('hello, world!'); &rcub;</db-code-block
            >
            <db-code-block title="helloWorld.sql">
              SELECT 'hello, world!' from main;
            </db-code-block>
          </div>
        </div>

        <db-projects id="db-projects" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>

        <h2>Heading 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>

        <h2>Heading 3</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </div>

    <div class="page-section m-0 footer bg-dark-grey border-top sticky">
      <div class="content">
        <p>
          Coded in
          <span class="mono"
            ><span class="text-blue">currentDate</span>.<span class="text-green">getFullYear</span
            >()</span
          >
          by Dominic Brazeel &#129304;
        </p>
      </div>
    </div>
  `,
  styles: `
    .page-section {
      width: 100%;
      margin-bottom: 1.2rem;
    }
    .content {
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
    }
    .header {
      top: 0;
    }
    .footer {
      height: 4rem;
      bottom: 0;
    }
    .m-header {
      margin-top: 2rem !important;
    }
    .avatar {
      height: 5rem;
      width: 5rem;
    }
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
export class App {
  private http = inject(HttpClient);

  downloadResume() {
    const url = 'DominicBrazeel_Resume.pdf';

    this.downloadFile(url).subscribe((blob) => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = 'DominicBrazeel_resume.pdf';
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }

  downloadFile(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' });
  }
}
