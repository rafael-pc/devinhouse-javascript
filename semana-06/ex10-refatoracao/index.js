import { Produto } from "./modules/carros.mjs";

const produto1 = new Produto(
  "Polo",
  "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  70000,
  [48, 60, 72, 84]
);
console.log(produto1);

const produto2 = new Produto(
  "Lamborghini",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  3700000,
  [1, 2, 3]
);
console.log(produto2);
