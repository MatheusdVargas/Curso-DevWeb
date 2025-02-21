// Criar uma função
function felizAniversario(nome, anos) {
    
    console.log(`Parabéns, feliz aniversário! ${nome}!`)
    console.log(`Você está fazenddo ${anos} anos de idade!`)
}

// Chamar uma função
felizAniversario("Matheus", 17);
felizAniversario("AAAAAAAAAA", 423);

// Crie uma função que devolva a soma de dois numeros
function somar(x, y) {
    return x + y;
}

let num = somar(3, 9);
console.log(num);

function multiplicar(x, y) {
    return x * y;
}

let num2 = multiplicar(3, 9);
console.log(num2);

function ePar(x) {
    if(x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

num = ePar(5)
console.log(num);