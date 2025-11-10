import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileService } from './services/file-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="page-section bg-black mb-0">
      <div class="content metal">
        <div class="flex-row justify-between w-full">
          <h1 class="metal m-auto-v w-50">Dominic Brazeel</h1>
          <div class="text-end w-50">
            <p class="m-auto-v italic w-full h-50 v-align-middle">Senior Web Developer</p>
            <p class="m-auto-v italic w-full h-50 v-align-middle">
              hardcore | metalcore | dotNET core
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-section header pt-3 bg-black border-bottom sticky">
      <div class="content mb-3 mt-3">
        <div class="flex-row justify-between">
          <div class="flex-row bold">
            <a class="nav-link text-rose mr-3" href="#about">Home</a>
            <a class="nav-link text-fandango mr-3" href="/projects">Projects</a>
            <a class="nav-link text-grape mr-3" href="/principles">Coding Principles</a>
            <a
              class="nav-link text-chrysler-blue mr-3"
              href="https://dombrazeel-library.vercel.app"
              target="_blank"
              >Design Library</a
            >
            <a class="nav-link text-dark-blue mr-3" href="/contact">Contact</a>
          </div>
          <div class="flex-row bold">
            <a
              class="nav-link text-neon-blue mr-3"
              href="https://www.linkedin.com/in/dominic-brazeel-a6922584/"
              target="_blank"
              >LinkedIn</a
            >
            <a class="nav-link text-yellow mr-3" href="#" (click)="downloadResume()">Resume</a>
          </div>
        </div>
      </div>
    </div>

    <div class="page-section">
      <div class="content primary-content">
        <router-outlet />
      </div>
    </div>
    <div class="page-section m-0 footer bg-black border-top">
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
    this.fileService.downloadAsset('DominicBrazeel_Resume.pdf');
  }
}
