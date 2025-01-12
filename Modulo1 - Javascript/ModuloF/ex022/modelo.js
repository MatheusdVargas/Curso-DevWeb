function adicionar() {
    var num = document.getElementById('fnum')
        num = Number(num.value)
        var lista = document.getElementById('flista')
        var item = document.createElement('option')
item.text = `O valor ${num} foi adicionado.`
        item.value = `value${num}`
        lista.appendChild(item)
        num.focus()
    

    if (num > 100 || num < 1) {
        alert('Valor invalido!')
        num.value = ''
        num.focus()
    } else {
        
        
    }

    if (lista.length == 0) {
        alert('Adicione valores antes de finalizar!')
    }
}