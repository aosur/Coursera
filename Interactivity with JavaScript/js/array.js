function arrayFunction(miArray){
    let miString = "";
    let parragraphs = document.getElementsByTagName('p');
    try {
        miArray.forEach(element => {
            miString += element + " ";
        });
        parragraphs[0].innerHTML = "Funciona: " + miString;
    } catch (error) {
        parragraphs[0].innerHTML = "No funciona: " + error;
    }
}

function arrayFunction2(miArray){
    let parragraphs = document.getElementsByTagName('p');
    try {
        parragraphs[0].innerHTML = miArray;
        miArray.forEach(element => {
            console.log(element);
        });
        
    } catch (error) {
        parragraphs[0].innerHTML = error;
    }
}


