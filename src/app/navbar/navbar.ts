import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'db-navbar',
  imports: [NgClass],
  template: `
    <div id="title-header" class="page-section bg-black deathstinger mb-0">
      <div class="content">
        <div class="row flex-wrap">
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
    <div class="page-section header bg-black sticky">
      <div class="content mb-3 mt-3">
        <div class="mt-2 row flex-wrap gap-2 justify-center-mobile justify-between">
          @if (showInitials()) {
            <div class="deathstinger font-lg animate-reveal-horizonal m-auto-v">
              Dominic Brazeel
            </div>
          }
          <div class="row gap-1 deathstinger">
            <a class="nav-link" [ngClass]="{ 'text-underline': routeActive('') }" href="/">Home</a>
            <a
              class="nav-link"
              [ngClass]="{ 'text-underline': routeActive('projects') }"
              href="/projects"
              >Projects</a
            >
            <a
              class="nav-link"
              [ngClass]="{ 'text-underline': routeActive('principles') }"
              href="/principles"
              >Principles</a
            >
            <a class="nav-link" [ngClass]="{ 'text-underline': routeActive('info') }" href="/info"
              >Info</a
            >
          </div>
          <div class="row justify-end gap-2 v-align-middle mobile-hidden">
            <a href="https://www.linkedin.com/in/dominic-brazeel-a6922584/"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
            <a href="https://github.com/Bonk4/"><i class="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>

      <div class="separator row justify-center w-full sticky">
        <div class="row w-10">
          <div class="nav-separator nav-separator-start"></div>
        </div>
        <div class="row justify-evenly w-80">
          <div class="nav-separator nav-separator-body"></div>
        </div>
        <div class="row w-10">
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
  showInitials = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onScroll() {
    const header = document.getElementById('');
    const height = header?.offsetHeight;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const isScrolled = scrollTop > (height ?? 0) + 25;
    this.showInitials.set(isScrolled);
  }

  routeActive(route: string): boolean {
    return window.location.pathname === `/${route}`;
  }
}
