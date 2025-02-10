
// Random number
let random = Math.floor((Math.random() * 100)) + 1;
console.log(random);

// Random range
const max = 100;
const min = 50;
let randomR = Math.floor((Math.random() * (max - min))) + min;
console.log(randomR);

// In Site
const button = document.getElementById('button');
const label = document.getElementById('label');
const minSite = 1;
const maxSite = 20;
let randomS;

button.onclick = function() {
    randomS = Math.floor((Math.random() * (maxSite - minSite))) + minSite;
    label.innerText = randomS;
}
