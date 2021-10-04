
var button= document.querySelector('button');  
let p = document.querySelector('p');

button.addEventListener('click', () => {
    alert('Surprise');
    p.innerHTML = button.value;
});


function myFunction() {
    p.innerHTML = button.value;
}