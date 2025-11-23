import { Component, inject } from '@angular/core';
import { FileService } from '../services/file-service';
import { ContentHeader } from '../components/content-header/content-header';

@Component({
  selector: 'db-info',
  imports: [ContentHeader],
  template: `
    <div class="row justify-evenly flex-wrap">
      <div class="col-6">
        <db-content-header>Contact</db-content-header>
        <p>
          <i class="fa-solid fa-message mr-2"></i>
          <a href="mailto:dombrazeel@gmail.com">dombrazeel&#64;gmail.com</a>
        </p>
        <p class="mb-5">
          <i class="fa-brands fa-linkedin mr-2"></i>
          <a href="https://www.linkedin.com/in/dominic-brazeel-a6922584/" target="_blank"
            >Dominic Brazeel</a
          >
        </p>
        <p>
          <i class="fa-solid fa-download mr-2"></i>
          <a href="#" (click)="downloadResume()">Resume</a>
        </p>
      </div>

      <div class="col-6 text-end">
        <h2>Credit</h2>
        <h3>Technologies</h3>
        <div>Written in Angular <i class="fa-brands fa-angular"></i></div>
        <div>Hosted with Vercel</div>

        <h3>Assets</h3>

        <div>
          <a href="https://fontawesome.com" target="_blank"
            >Font Awesome Icons <i class="fa-solid fa-font-awesome ml-2"></i
          ></a>
        </div>
        <div>
          <a href="https://www.fontspace.com/death-stinger-font-f149057" target="_blank"
            >Death Stinger Font</a
          >
        </div>
        <div>
          <a href="https://fonts.google.com/specimen/Spectral" target="_blank">Spectral Font</a>
        </div>
        <div>
          <a href="https://fonts.google.com/specimen/Metal+Mania?query=Metal+Mania" target="_blank"
            >Metal Mania Font</a
          >
        </div>
        <div>
          <a href="https://www.jetbrains.com/lp/mono/" target="_blank">JetBrains Mono Font</a>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Info {
  fileService = inject(FileService);

  downloadResume() {
    this.fileService.downloadAsset('DominicBrazeel_Resume.pdf');
  }
}
