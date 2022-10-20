let paragraphe = document.querySelector('p');
let input = document.querySelector('input');
let bouton = document.querySelector('button');


bouton.addEventListener('click', function (e) { 
    paragraphe.textContent = input.value;
 });