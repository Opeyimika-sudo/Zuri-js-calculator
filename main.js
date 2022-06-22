let symbols = ['+', '-', '/', '*', '%'];
function number1(){
    let firstNo = prompt("Enter first number");
    firstNo = Number(firstNo);
    if(typeof firstNo == 'number'){
        operator(firstNo);
    }
    else{
        number1();
    }
}
 
function operator(firstNo){
    let symbol = prompt("Enter operator from the list below: +, -, *, /, %");
    if(symbols.filter(item => item == symbol).length >= 1){
        number2(firstNo, symbol);
    }
    else{
        operator(firstNo);
    }
}
function number2(firstNo, symbol){
    let secondNo = prompt("Enter second number");
    secondNo = Number(secondNo);
    if(typeof secondNo == 'number'){
        calculator(firstNo, symbol, secondNo);
    }
    else{
        number2(firstNo, symbol);
    }
}



number1();


function calculator(firstNo, symbol, secondNo){
    if(symbol == "+"){
        alert(firstNo + secondNo);
    }
    else if(symbol == "-"){
        alert(firstNo - secondNo);
    }
    else if (symbol == "*"){
        alert(firstNo * secondNo);
    }
    else if(symbol == "/"){
        alert(firstNo / secondNo);
    }
    else{
        alert(firstNo % secondNo);
    }
}
