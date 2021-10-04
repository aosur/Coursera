function welcomeMsg(){
    alert('welcome');
}

function choosePar(){
    var parNumber = prompt('Which Paragraph do you need?');
    var miArray = document.getElementsByTagName('p');
    alert("Your paragraph: " + miArray[parNumber - 1].textContent);
}

function writeOnSomeElement(element, numberOfElement, myText){
    var miArray = document.getElementsByTagName(element);
    var miElement = miArray[numberOfElement - 1];
    miP.innerHTML = myText;
}

function visibility(element, numberOfElement, attributeValue){
    var miArray = document.getElementsByTagName(element);
    var miElement = miArray[numberOfElement - 1];
    miElement.style.visibility= attributeValue;
}

function visibility2(element, numberOfElement, option){
    var miArray = document.getElementsByTagName(element);
    var miElement = miArray[numberOfElement - 1];
    miElement.className = option + " special";
}