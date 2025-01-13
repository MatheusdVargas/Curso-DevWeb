// Objetosa sao arrays que podem ter indices com nome, alem de guardarem todos tipos de dados e funções
let amigo = {nome: 'Matheus', 
    sexo: 'M', 
    peso: 55, 
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)