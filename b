let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', validarForm);

let nome = document.getElementById('nome');
nome.addEventListener('blur', validarNome);
nome.addEventListener('keyup', validarNome);

let endereco = document.getElementById('endereco');
endereco.addEventListener('blur', validarEndereco);
endereco.addEventListener('keyup', validarEndereco);

function validarForm(event) {
    if((validarNome() == false) || (validarEndereco() == false)) {
        event.preventDefault();
        alert('Por favor, informe todos os dados.'); 
    } else {
        alert('Dados validos.');
    }
}

function validarNome() {
    let nome = document.getElementById('nome');
    if(nome.value.length < 5) {
        nome.setAttribute('class', 'erro');
       return false;
    } else {
        nome.setAttribute('class', 'correto');
        return true;
    }
}

function validarEndereco() {
    let endereco = document.getElementById('endereco');
    if(endereco.value.length == 0) {
        endereco.setAttribute('class', 'erro');
        return false;
    } else {
        endereco.setAttribute('class', 'correto');
        return true;
    }
}












































// let telefone = document.getElementById('telefone');
// let email = document.getElementById('email');
// let CPF = document.getElementById('CPF');
// let CEP = document.getElementById('CEP');
// let nascimento = document.getElementById('nascimento');



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Trabalho de WEB II</title>
</head>
<body>
    <header>
        <h1>Trabalho WEB II - Validação de formulários</h1>
        <h2>Grupo: Matheus de Vargas e Phelipe E. Schmidt</h2>
        <h3>Turma: 2° INFO</h3>
    </header>
    <div>
        <form method="get" id="formulario" action="https://ifrs.edu.br/cadastro.php">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" placeholder="Digite seu nome">

            <label for="endereco">Endereço:</label>
            <input type="text" id="endereco">
            <!-- <label for="telefone">Telefone:</label>
            <input type="number" id="telefone">
            
            <label for="email">Email:</label>
            <input type="text" id="email">
            <label for="CPF">CPF:</label>
            <input type="text" id="CPF">
            <label for="CEP">CEP:</label>
            <input type="number" id="CEP">
            <label for="nascimento">Data de Nascimento:</label>
            <input type="date" id="nascimento"> -->
            <button type="submit" id="submit" value="enviar">Cadastrar</button>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>



:root {
    --preto: #0A0A0A;
    --azulEscuro: #0A111F;
    --azul: #14213D;
    --cinza: #4F596E;
    --branco: #F5F5F5;
}
body {
    background-color: var(--azul);
    color: var(--branco);
}
.formulario {
    margin: auto;
    background-color: var(--azulEscuro);
    height: 500px;
    width: 500px;
    border-radius: 15px;
}
.erro {
    outline: none;
    border: 2px solid red;
}
.correto {
    outline: none;
    border: 2px solid green;
}
























<!-- 

-->
