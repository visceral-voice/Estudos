// const op = require("./operacoes.js");
// const mult = require("./operacoes2.js");
import op from "./operacoes.js";
import mult from "./operacoes2.js";
import {divisao, resto} from "./operacoes3.js";

console.log(op.soma(2, 3));
console.log(op.subtracao(5, 3));
console.log(op.nome);
console.log(mult(3, 4));
console.log(divisao(10, 2));
console.log(resto(7, 2));
