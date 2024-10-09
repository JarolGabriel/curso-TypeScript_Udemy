(() => {
  const batman: string = "Batman";
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Heroe: Volcan Negro`;

  console.log(`I'm ${batman}`);
  console.log(batman.toLocaleUpperCase());

  console.log(batman[10]?.toLocaleUpperCase() || "no soy un superHero");
})();
