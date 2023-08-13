import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

const resultado = new CaixaDaLanchonete().calcularValorDaCompra('credito', ['combo1,2','cafe,2','combo2,2','chantily,2','suco,2','sanduiche,2','queijo,2','salgado,2']);
console.log(resultado)