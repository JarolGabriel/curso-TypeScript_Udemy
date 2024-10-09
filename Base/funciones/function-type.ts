(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `hola ${name}`;
  const saveTheWorld = () => `El mundo esta salvado`;

  let myFunction: () => String;

  //! myFunction= 10;
  //console.log(myFunction)

  //myFunction= addNumbers;
  //console.log(myFunction(1,2))

  //myFunction= greet;
  //console.log(myFunction("Fernando"))

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
