var grades =  [1, 15,,4];
var  sum = 0;
var newLength = 0;

if(grades.length > 0){
    
for(i = 0; i < grades.length; i++){
    if(grades[i] != undefined) {
        sum += grades[i];
        newLength ++;
    }
}
    document.write(sum/newLength);
}else{
    document.write('Empty array');
}


