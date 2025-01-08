function fatorial(num) {
    for(let i = num; i > 1; i--) {
        num *= i - 1
    }
    return num
}
console.log(fatorial(3))
console.log(fatorial(5))
console.log(fatorial(9))