import { Component, inject } from '@angular/core';
import { Projects } from './features/projects/projects';
import { Avatar } from './components/avatar/avatar';
import { FileService } from './services/file-service';
import { Proficiencies } from './features/proficiencies/proficiencies';
import { Principles } from './features/principles/principles';

@Component({
  selector: 'app-root',
  imports: [Projects, Avatar, Proficiencies, Principles],
  template: `
    <div class="page-section bg-dark-grey">
      <div class="content">
        <div class="flex-row justify-start mb-5">
          <div class="avatar m-header mr-3xl">
            <db-avatar
              img="img/halloween_2025_zoomed.png"
              alt="Dominic at a halloween party, 2025"
              [size]="'lg'"
            />
          </div>
          <div class="m-header w-full ml-5">
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
          <div class="flex-row bold">
            <a class="nav-link text-yellow mr-3" href="#about">About</a>
            <a class="nav-link text-orange mr-3" href="#proficiencies">Proficiencies</a>
            <a class="nav-link text-red mr-3" href="https://dombrazeel-library.vercel.app"
              >Design Library</a
            >
            <a class="nav-link text-pink mr-3" href="#db-projects">Projects</a>
            <a class="nav-link text-purple mr-3" href="#db-principles">Coding Principles</a>
          </div>
          <div class="flex-row bold">
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

        <db-proficiencies />

        <db-projects id="db-projects" />

        <db-principles id="db-principles" />
      </div>
    </div>

    <div class="page-section m-0 footer bg-dark-grey border-top sticky">
      <div class="content">
        <p class="mono font-sm">
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
      height: 3rem;
      bottom: 0;
    }
    .m-header {
      margin-top: 2rem !important;
    }
    .avatar {
      height: 5rem;
      width: 5rem;
    }
  `,
})
export class App {
  private fileService = inject(FileService);

  downloadResume() {
    this.fileService.downloadAsset('Dominic_Brazeel_Resume.pdf');
  }
}
