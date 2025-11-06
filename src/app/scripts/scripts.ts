export const typescriptHelloWorld = `console.log('Hello, World!');`;
export const csharpHelloWorld = `Console.Print('Hello, World!');`;
export const sqlHelloWorld = `select 'Hello, World!' from main;`;

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
