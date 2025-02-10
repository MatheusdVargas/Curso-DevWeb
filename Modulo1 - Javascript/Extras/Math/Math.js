// Biblioteca Math

let x = 3.21;
let y = 2;
let z;

z = Math.round(x); // arredonda para o inteiro mais proximo
console.log(z);
z = Math.floor(x); // arredonda para baixo
console.log(z);
z = Math.ceil(x); // arredonda para cima
console.log(z);
z = Math.sqrt(y); // raiz quadrada
console.log(z);
z = Math.abs(y); // valor absoluto
console.log(z);

// Achando o maior e menor numero: 
z = -3;
let max = Math.max(x, y, z);
console.log(max);
let min = Math.min(x, y, z);
console.log(min);

// Também existe: sin, cos, tan, log, pow