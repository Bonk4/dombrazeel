import { Component, computed, input, signal } from '@angular/core';
import { Script } from './models/script';
import { NgClass } from '@angular/common';

@Component({
  selector: 'db-code-block',
  imports: [NgClass],
  template: `
    <div class="row justify-start ml-3 overflow-h-auto">
      @for (script of scripts(); track $index) {
        <h5
          class="tab-header mono text-underline p-2"
          [ngClass]="{ selected: scriptIndex() === $index, italic: scriptIndex() === $index }"
          (click)="selectScript($index)"
        >
          {{ script.name }}
        </h5>
      }
    </div>

    <div class="border border-rounded bg-dark-grey w-full">
      <div class="mono m-2 overflow-h-auto">
        <table class="code-block">
          @for (line of scriptLines(); track $index) {
            <tr class="font-sm">
              <td class="text-grey font-sm">{{ $index + 1 }}</td>
              <td class="pl-3">
                <p class="m-0 font-sm">
                  @for (tab of tabs(line); track tab) {
                    <span class="tab"></span>
                  }
                  {{ line }}
                </p>
              </td>
            </tr>
          }
        </table>
      </div>
    </div>
  `,
  styles: `
    .tab-header {
      margin-bottom: 0;
      border-left: 1px solid white;
      border-top: 1px solid white;
      border-right: 1px solid white;

      background-color: var(--black);
    }
    .tab-header:first-child {
      border-top-left-radius: var(--border-radius);
    }
    .tab-header:last-child {
      border-top-right-radius: var(--border-radius);
    }
    .tab-header.selected {
      background-color: var(--purple);
      font-weight: 1000;
    }
    .tab-header:hover {
      background-color: var(--pink);
      cursor: pointer;
    }
    .tab {
      padding-left: 2rem;
    }
  `,
})
export class CodeBlock {
  scripts = input<Script[]>([]);

  scriptIndex = signal<number>(0);

  scriptLines = computed(() => {
    const index = this.scriptIndex();
    const scripts = this.scripts();

    const script = scripts[index];

    if (script && script.code) {
      return script.code.split(/[\r\n]+/);
    } else {
      return [``];
    }
  });

  tabs(code: string) {
    const tabs: number[] = [];
    const count = code.split('\t').length - 1;
    for (let i = 0; i < count; i++) {
      tabs.push(i);
    }
    return tabs;
  }

  selectScript(index: number) {
    this.scriptIndex.set(index);
  }
}
