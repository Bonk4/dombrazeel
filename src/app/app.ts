import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <db-navbar />

    <div class="page-section mt-0">
      <div class="content primary-content">
        <router-outlet />
      </div>
    </div>

    <db-footer />
  `,
  styles: ``,
})
export class App {}
