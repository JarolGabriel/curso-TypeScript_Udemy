import { Pokemon } from "./decorators/pokemons-class";

const charmander = new Pokemon("Chanmander");

//(Pokemon.prototype as any).customName = "picachu";

charmander.publictApi = "https://fernando-herrera.com";
console.log(charmander);

//charmander.savePokemonToDB(3);
