// var generateName = require("sillyname");
import generateName from "sillyname";
import superheroes from "superheroes";

var sillyname = generateName();
console.log(`My name is ${sillyname}`);
console.log(`My name is ${superheroes.random()}`);
console.log(superheroes.all);
