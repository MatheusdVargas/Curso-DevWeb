// declarando array
let num = [5, 8, 2, 9, 3]
// utilizando indices
num[0] = 2
num[3] = 6
// sem utilizar indices (adiciona uma nova casa no fim da array)
num.push(7)
// tamanho do array
num.length
console.log(num)
// deixar em ordem crescente
num.sort()
console.log(num)
// printar cada numero da array
for(let i = 0; i < num.length; i++) {
    console.log(num[i])
}