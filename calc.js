


console.log("hello, world")
function doMath ( num1, num2, operator){
  switch(operator){
    case"+":
     return num1 + num2;
     break;
    case"-":
     return num1 - num2;
     break;
    case"/":
     return num1/num2;
     break;
    case"*":
     return num1*num2;
     break
  }
}

// var answer = doMath (2,5, "+")
console.log(process.argv)


var num1 = parseFloat(process.argv[2])
var operator = (process.argv[3])
var num2 = parseFloat(process.argv[4])

console.log(doMath(num1, num2, operator))
