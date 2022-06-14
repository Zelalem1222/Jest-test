
function calculate(number1,number2,operator){
    if (!number1 || !number2){
        return "Invalid number"
    }
    if (!['*','-','/','+'].includes(operator)){
        return "Invalid operator"
    }
    switch(operator){
      case "+":
        return number1 + number2;
      case "/":
        return number1 * number2;
      case "*":
        return number1 * number2;
      case "-":
        return number1 - number2;
     }
    }
    

module.exports = calculate;