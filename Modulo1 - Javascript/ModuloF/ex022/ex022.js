function adicionar() {
    // input
    let num = Number(document.getElementById('fnum').value)
    let lista = document.getElementById('flista')
    let option = document.createElement('option')
    option.value = num
    if (option.value > 100 || option.value < 1) {
        alert('Valor invalido ou ja encontrado na lista.')
        document.getElementById('fnum').value = ''
        document.getElementById('fnum').focus()
    } else {
        option.text = `Valor ${num} adicionado.`
        lista.appendChild(option)
        document.getElementById('fnum').value = ''
        document.getElementById('fnum').focus()
    }
}

function finalizar() {
    let total = document.getElementById('flista').length
    let maior = 0
    let menor = 0
    let soma = 0
    let media = 0
    for (let i = 0; i < total; i++) {
        let num = Number(document.getElementById('flista').options[i].value)

        // Algortimo para identificar o maior e o menor
        if (i == 0) {
            maior = num
            menor = num
        } else {
            if (num > maior) {
                maior = num
            }
            if (num < menor) {
                menor = num
            }
        }
        soma += num
    }
    // output
    media = soma / total
    document.getElementById('output').innerHTML = ''
    document.getElementById('output').innerHTML += `<p>Ao todo, temos ${total} numeros cadastrados.</p>`
    document.getElementById('output').innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    document.getElementById('output').innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    document.getElementById('output').innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    document.getElementById('output').innerHTML += `<p>A media dos valores digitados é ${media.toFixed(2)}.</p>`
    }