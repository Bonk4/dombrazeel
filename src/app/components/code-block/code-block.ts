import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'db-code-block',
  imports: [],
  template: `
    @if (title() !== undefined) {
      <h4 class="mono ml-5">{{ title() }}</h4>
    }
    <div class="border border-rounded bg-black w-full h-full">
      <div class="mono m-2">
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
    .tab {
      padding-left: 2rem;
    }
  `,
})
export class CodeBlock {
  title = input<string | undefined>(undefined);
  script = input<string>("console.log('hello, world!');");

  scriptLines = computed(() => {
    const script = this.script();

    return script.split(/[\r\n]+/);
  });

  tabs(code: string) {
    const tabs: number[] = [];
    const count = code.split('\t').length - 1;
    for (let i = 0; i < count; i++) {
      tabs.push(i);
    }
    return tabs;
  }
}
