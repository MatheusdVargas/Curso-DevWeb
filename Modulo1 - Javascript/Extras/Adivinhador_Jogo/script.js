const min = 1;
const max = 100;

let resposta = Math.floor((Math.random() * (max - min))) + min;

let tentativas = 0;
let tentativa;

do {
    tentativa = Number(prompt(`Tente adivinhar o numero entre ${min} e ${max}`));
    if(isNaN(tentativa) || tentativa === "") {
        window.alert('Por favor, digite um numero');
    } else if(tentativa < min || tentativa > max) {
        tentativas++;
    } else {
        tentativas++;
        if(tentativa < resposta) {
            window.alert('O numero e maior');
        } else if(tentativa > resposta) {
            window.alert('O numero e menor');
        }
    }
} while(tentativa != resposta);

console.log(`Acertou em ${tentativas} tentativas`);

    