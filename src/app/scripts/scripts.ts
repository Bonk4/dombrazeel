import { Script } from '../components/code-block/models/script';

export const csharpBadIfCheck = `if (object?.Property?.Subproperty?.AttributeToCheck.All(x => x.shouldReturnTrue == true) !== null) {
  \tDoTheThing('now!');
  }`;
export const csharpBetterIfCheck = `var attributeToCheck = object?.Property?.Subproperty?.AttributeToCheck;
  var willDoTheThing = attributeToCheck.All(x => x.shouldReturnTrue == true);
  \n
  if (attributeToCheck != null && willDoTheThing)
  {
  \tDoTheThing('now!');
  }`;

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
