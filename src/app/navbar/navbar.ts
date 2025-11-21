import { Component, HostListener, inject, signal } from '@angular/core';
import { FileService } from '../services/file-service';

@Component({
  selector: 'db-navbar',
  imports: [],
  template: `
    <div id="title-header" class="page-section bg-black deathstinger mb-0">
      <div class="content">
        <div class="row">
          <div class="col-6 desktop-text-start mobile-text-center flex-row justify-start">
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
    <div class="page-section header bg-black metal sticky">
      <div class="content mb-3 mt-3">
        <div class="flex-row justify-between flex-wrap">
          <div class="mt-2 flex-row flex-wrap">
            @if (showInitials()) {
              <div class="animate-reveal-horizonal highlight-underline-primary mr-3">DB</div>
            }
            <a class="nav-link mr-3" href="/">Home</a>
            <a class="nav-link mr-3" href="/projects">Projects</a>
            <a class="nav-link mr-3" href="/principles">Coding Principles</a>
            <a class="nav-link mr-3" href="https://dombrazeel-library.vercel.app" target="_blank">
              Design Library
            </a>
            <a class="nav-link mr-3" href="/contact">Contact</a>
          </div>
          <div class="flex-row">
            <a
              class="nav-link mr-3"
              href="https://www.linkedin.com/in/dominic-brazeel-a6922584/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a class="nav-link mr-3" href="#" (click)="downloadResume()">Resume</a>
          </div>
        </div>
      </div>

      <div class="separator flex-row justify-center w-full sticky">
        <div class="flex-row w-10">
          <div class="nav-separator nav-separator-start"></div>
        </div>
        <div class="flex-row justify-evenly w-80">
          <div class="nav-separator nav-separator-body"></div>
        </div>
        <div class="flex-row w-10">
          <div class="nav-separator nav-separator-end"></div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .separator {
      height: 5px;
    }

    .nav-separator {
      position: relative;
      height: 5px;
      width: 100%;
    }

    .nav-separator-body::after,
    .nav-separator-start::after,
    .nav-separator-end::after {
      content: '';
      position: absolute;
      top: -5px;
      left: 0;
      width: 100%;
      height: 50px !important;
      background-repeat: no-repeat;
      background-size: 100% 50px !important;
    }

    .nav-separator-body::after {
      background-image: url('/img/line-body.png');
      background-repeat: no-repeat;
    }

    .nav-separator-start::after {
      width: auto;
      right: 0 !important;
      background-image: url('/img/line-edge.png');
      -webkit-transform: scaleX(-1);
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    .nav-separator-end::after {
      left: 0;
      background-image: url('/img/line-edge.png');
    }
  `,
})
export class Navbar {
  private fileService = inject(FileService);

  topSectionHeight: number = 0;

  // @ViewChild('#title-header') topSection!: ElementRef<HTMLDivElement>;
  showInitials = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onScroll() {
    const header = document.getElementById('');
    const height = header?.offsetHeight;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const isScrolled = scrollTop > (height ?? 0) + 25;
    this.showInitials.set(isScrolled);
  }

  downloadResume() {
    this.fileService.downloadAsset('DominicBrazeel_Resume.pdf');
  }
}
