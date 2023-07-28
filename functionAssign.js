console.log(`------------------------------Step 1--------------------------`);
console.log(" ");
function sqOfstring( string){
  var lth = string.length;
  var result = lth*lth;
  console.log(` ==> ${string} 1) The Length of word is [${lth} ]. 2) The square of Length is [${result}]` )

}
sqOfstring("javascript");
sqOfstring("Google chrome");
sqOfstring("Developer Smart");

console.log(`------------------------------Step 2--------------------------`);
console.log(" ");

var stringNew = function(){
  let string = "I am Angular Developer";
  console.log(`String is : ${string}`);
  let stringSize = string.length;
  console.log(`String length is : ${stringSize}`);
  let numberOfwords = string.split(" ");
  // console.log(`Total number of words in string are :${result}`);
  let result = numberOfwords.length;
  console.log(`Total number of words in string are :${result}`);
  let divide = stringSize/result;
  console.log(`Result after Dividing  String length by number of words is : ${divide}`);
  let multiply = stringSize*result;
  console.log(`Result after Multiplying  String length by number of words is : ${ multiply}`);
}
stringNew();
console.log(" ");

console.log(`-------------------------------Assignment No 2------------------------------- `);
console.log(" ");
function greatestNum( num1,num2){
  console.log(`The entered number are ${num1}, ${num2}`);
  if (num1>num2) {
    
    console.log(`The Greatest number is ${ num1}`);
    
  }
  else{
    console.log(`Greatest number is : ${num2}`);
  }

}
greatestNum(50,100);
greatestNum(10,-10);
console.log(`-----------------------------Number Odd Even-------------------------------- `);
console.log(" ");

function checkOddeven(number){
  if (number%2===0) {
    console.log(`The Number ${number} is "EVEN"`);
    
  }
  else{
    console.log(`The Number ${number} is "ODD"`);
  }

}
checkOddeven(29);
checkOddeven(44);
checkOddeven(0);
checkOddeven(101);

console.log(`-------------------------Length of string ODD EVEN------------------------`);
console.log(" ");
var wordstring = function(name){
  console.log(`The entered Word is : ${name}`);
  let a = name.length;
  console.log(`The Word Length is : ${a}`);
  if (a%2===0) {
    console.log(`The Length of String is EVEN`);
    
  }
  else{
    console.log(`The length of string is ODD`);
  }

 
}
wordstring("Javascript");
wordstring("Developer");
wordstring("Google");



