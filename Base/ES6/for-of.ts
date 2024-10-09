(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: "Ironman",
    weapon: "Armorsuit",
  };

  const captainAmerica: Avenger = {
    name: "Capitan America",
    weapon: "Shield",
  };

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjoilnor",
  };

  const avengers: Avenger[] = [ironman, thor, captainAmerica];

  for (const avenger of avengers) {
    //console.log(avenger.name, avenger.weapon);
  }
})();
