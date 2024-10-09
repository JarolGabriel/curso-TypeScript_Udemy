import {
  genericFunctionArrow,
  genericFunction,
  printObject,
} from "../generics/generic";
import { Villain, Hero } from "../interfaces";
// import { Villain } from "../interfaces/villains";
// import { Hero } from "../interfaces/hero.js";

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7]);
// printObject("hola Mundo");

// const name: string = "Fernando";

// console.log(genericFunctionArrow(3.142563546476).toFixed(2));
// console.log(genericFunctionArrow(name).toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate());

const deadpool = {
  name: "Deadpool",
  realName: "Wade wiston wilson",
  dangerLevel: 130,
};

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
