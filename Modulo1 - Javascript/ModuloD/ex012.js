var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} hora(s)`)
if (hora >= 5 && hora < 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora <= 18) {
    console.log('Boa tarde!')
} else if (hora > 18 && hora <= 2) {
    console.log('Boa Noite!')
} else if (hora > 2 && hora < 5) {
    console.log('Boa madrugada!')
}
