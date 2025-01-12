function contar() {
    var ini = document.getElementById('inic')
    if(ini == '') {
        ini = 0
    } else {
        ini = Number(ini.value)
    }
    
    var fim = document.getElementById('fim')
    if(fim == '') {
        alert('Defina um fim!')
    } else {
        fim = Number(fim.value)
    }
    
    var passo = document.getElementById('passo')
    if(passo == '') {
        alert('Defina um passo!')
    } else {
        passo = Number(passo.value)
    }
    
    var res = document.getElementById('result')
    
    res.innerHTML = 'Contando: '
    if(passo === 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        passo = 1
    }
    if(inicio > fim) {
        for(var i = ini; i <= fim; i += passo) {
            res.innerHTML += `${i} \u{1F449}`
        }
    } else if (inicio < fim) {
        for(var i = ini; i >= fim; i -= passo) {
            res.innerHTML += `${i} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}