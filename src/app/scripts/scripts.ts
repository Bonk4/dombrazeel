import { Script } from '../components/code-block/models/script';

export const hardToReadCheck: Script = {
  name: 'hardToReadCheck.cs',
  code: `if (object?.Property?.Subproperty?.AttributeToCheck.All(x => x.shouldReturnTrue == true) !== null) {
  \tDoTheThing();
  }`,
};

export const humanReadableCheck: Script = {
  name: 'humanReadableCheck.cs',
  code: `var attributeExists = object?.Property?.Subproperty?.AttributeToCheck == null;
  var willDoTheThing = attributeToCheck.All(x => x.shouldReturnTrue == true);
  \n
  if (attributeExists && willDoTheThing)
  {
  \tDoTheThing();
  }`,
};

export const sqlHelloWorld: Script = {
  name: 'helloWorld.sql',
  code: `declare @message varchar = 'Hello, World!';
select @message;`,
};

export const csharpHelloWorld: Script = {
  name: 'helloWorld.cs',
  code: `public void Main() {
  \tConsole.Write('Hello, World!');
  }`,
};

export const typescriptHelloWorld: Script = {
  name: 'helloWorld.ts',
  code: `const message = 'Hello, World!';\nconsole.log(message);`,
};

export const sizingCss: Script = {
  name: 'margins.css',
  code: `:root {
  \t--size-1: 0.1rem;
  \t--size-2: 0.3rem;
  }
  .m-0 { margin: 0; }
  .m-1 { margin: var(--size-1); }
  .m-2 { margin: var(--size-1); }`,
};

export const flexCss: Script = {
  name: 'flex.css',
  code: `.row {
  \tdisplay: flex;
  \tflex-direction: row;
  \tjustify-content: space-evenly;
  }
  .justify-between {
  \tjustify-content: space-between !important;
  }`,
};
