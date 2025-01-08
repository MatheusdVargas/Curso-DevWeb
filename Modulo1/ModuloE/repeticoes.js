// While (testa primeiro e depois executa)
var ola = 'Olá'
var i = 0
while (i <= 30) {
    console.log(ola + ' ' + i)
    i++
}
// Reseta o i
i = 0
// Do While (testa depois e depois executa)
do {
    console.log(ola + ' ' + i)
    i++
} while (i <= 30)

// For (é usado quando sabe-se quantas vezes o comando deve ser executado)
for (var j = 0; j <= 30; j++) {
    console.log(ola + ' ' + j)
}