import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 234576854321);
const cliente2 = new Cliente("Alice", 11133355567);

const contaCorrenteAlice = new ContaCorrente(1001, cliente1);
const contaCorrenteRicardo = new ContaCorrente(1001, cliente2);
contaCorrenteRicardo.depositar(5000)
contaCorrenteRicardo.tranferir(200, contaCorrenteAlice)

console.log(contaCorrenteRicardo)
console.log(contaCorrenteAlice)
console.log(ContaCorrente.numeroDeContas)