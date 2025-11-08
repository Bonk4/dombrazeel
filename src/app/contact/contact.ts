import { Component } from '@angular/core';
import { ContentHeader } from '../components/content-header/content-header';

@Component({
  selector: 'db-contact',
  imports: [ContentHeader],
  template: `
    <db-content-header>Contact Info</db-content-header>
    <p>If you want to reach out, here are the best ways to do so:</p>
    <p>
      Email: <a href="mailto:dombrazeel@gmail.com">dombrazeel{{ '@' }}gmail.com</a>
    </p>
    <p>
      LinkedIn:
      <a href="https://www.linkedin.com/in/dominic-brazeel-a6922584/" target="_blank"
        >Dominic Brazeel</a
      >
    </p>
  `,
  styles: ``,
})
export class Contact {}
