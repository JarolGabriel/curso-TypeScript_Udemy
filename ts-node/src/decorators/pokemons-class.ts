function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConditional = (print: boolean): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    description: PropertyDescriptor
  ) {
    const originalMethod = description.value;

    description.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("el id del pokemon debe estar entre 1 y 800");
      } else {
        return originalMethod(id);
      }
    };

    //description.value = () => console.log("Hola mundo");
  };
}

function readonly(isWrite: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const description: PropertyDescriptor = {
      get() {
        console.log(this);
        return "fernando";
      },
      set(this, val) {
        //console.log(this, val);
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWrite,
          enumerable: false,
        });
      },
    };

    return description;
  };
}

@bloquearPrototipo
@printToConditional(false)
export class Pokemon {
  @readonly()
  public publictApi: string = "https://pokeapi.co";

  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`pokemon guardado en la base de datos ${id}`);
  }
}
