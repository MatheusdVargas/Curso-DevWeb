// Crie um programa que receba um nome de usuário. Deixe a primeira letra de seu nome maiuscula e o restante em minusculo sem espaços.

username = prompt('Qual o seu nome?');

console.log(username.charAt(0).toUpperCase() + username.slice(1).toLowerCase());

console.log(username);