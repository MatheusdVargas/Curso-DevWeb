const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const contLabel = document.getElementById("contLabel");

let cont = 0;

increase.onclick = function() {
    cont++;
    contLabel.innerText = cont;
}

decrease.onclick = function() {
    cont--;
    contLabel.innerText = cont;
}

reset.onclick = function() {
    cont = 0;
    contLabel.innerText = cont;
}