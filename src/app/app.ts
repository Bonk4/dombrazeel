import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileService } from './services/file-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="page-section bg-black deathstinger mb-0">
      <div class="content">
        <div class="row">
          <div class="col-6 desktop-text-start mobile-text-center">
            <h1 class="m-auto-v w-full">Dominic Brazeel</h1>
          </div>
          <div class="col-6 mt-2 mb-2 desktop-text-end mobile-text-center">
            <p class="d-inline-block m-auto-v w-full h-50 v-align-middle">Senior Web Developer</p>
            <p class="d-inline-block m-auto-v w-full h-50 v-align-middle">
              hardcore - metalcore - dotNET core
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-section header bg-black deathstinger border-bottom sticky">
      <div class="content mb-3 mt-3">
        <div class="flex-row justify-between">
          <div class="flex-row">
            <a class="nav-link mr-3" href="#about">home</a>
            <a class="nav-link mr-3" href="/projects">projects</a>
            <a class="nav-link mr-3" href="/principles">coding principles</a>
            <a class="nav-link mr-3" href="https://dombrazeel-library.vercel.app" target="_blank"
              >design library</a
            >
            <a class="nav-link mr-3" href="/contact">Contact</a>
          </div>
          <div class="flex-row">
            <a
              class="nav-link mr-3"
              href="https://www.linkedin.com/in/dominic-brazeel-a6922584/"
              target="_blank"
              >linkedIn</a
            >
            <a class="nav-link mr-3" href="#" (click)="downloadResume()">resume</a>
          </div>
        </div>
      </div>
    </div>

    <div class="page-section mt-0">
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
  styles: `
    .logo {
      outline: darkred 1px solid;
    }
  `,
})
export class App {
  private fileService = inject(FileService);

  downloadResume() {
    this.fileService.downloadAsset('DominicBrazeel_Resume.pdf');
  }
}
