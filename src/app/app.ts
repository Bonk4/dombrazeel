import { Component, inject } from '@angular/core';
import { Avatar } from './components/avatar/avatar';
import { RouterOutlet } from '@angular/router';
import { FileService } from './services/file-service';

@Component({
  selector: 'app-root',
  imports: [Avatar, RouterOutlet],
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
            <a class="nav-link text-red mr-3" href="/projects">Projects</a>
            <a class="nav-link text-pink mr-3" href="/principles">Coding Principles</a>
            <a class="nav-link text-purple mr-3" href="https://dombrazeel-library.vercel.app"
              >Design Library</a
            >
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
        <router-outlet />
      </div>
    </div>

    <div class="page-section m-0 footer bg-dark-grey border-top">
      <div class="content">
        <p class="mono font-sm">
          Coded in
          <span class="mono">
            {{ '{{' }} <span class="text-grey">new </span
            ><span class="text-blue">Date</span>().<span class="text-green">getFullYear</span
            >()</span
          >
          {{ '}}' }} by Dominic Brazeel &#129304;
        </p>
      </div>
    </div>
  `,
  styles: ``,
})
export class App {
  private fileService = inject(FileService);

  downloadResume() {
    this.fileService.downloadAsset('Dominic_Brazeel_Resume.pdf');
  }
}
