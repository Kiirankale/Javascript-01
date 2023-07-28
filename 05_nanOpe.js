console.log(`-----------------------------Implicit Conversion to string-----------------------------------------`);
console.log(" ");
let a ="3" + 2;
console.log(`"3" + 2 = ${a} ==> Summary : when we add number with a String , The number is converted into string due to "Implicit Conversion in javascript"`);

let b = "3" + true;
console.log(`"3" + true = ${b} ==> Summary : when we add boolean with a String , The boolean is converted into string due to "Implicit Conversion in javascript"`);
let c = "3" + undefined;
console.log(`"3" + undefined = ${c} ==> Summary : when we add undefined with a String , The undefined is converted into string due to "Implicit Conversion in javascript"`);

let d = "3" + null;
console.log(`"3" + null = ${d} ==> Summary : when we add null with a String , The null is converted into string due to "Implicit Conversion in javascript"`);
console.log(" ");

console.log(`----------------------------Implicit boolean conversion to number------------------`);
console.log(" ");
var ab ="4" - true;
console.log(`"4" - true = ${ab} ==> Summary : Boolean value will change to number in Subtraction case with string , True =1 , False=0 `);
var bc =4 + true;
console.log(`4 + true = ${bc} ==> Summary : Boolean value will change to number in Addition case with a number,  True =1 , False=0 `);
var cd =4 + false;
console.log(`4 + False = ${cd} ==> Summary : Boolean value  will change to number in Addition case  with a number ,  True =1 , False=0`);
console.log(" ");
console.log(`----------------------------Implicit String conversion to number------------------`);
console.log(" ");
let aa="4" -"2";
console.log(`"4" - "2" = ${aa} ==> Summary : when string datatype  holds a number as data ,Then the string will convert in a number ,due to "Implicit string conversion to number". `);
let bb="4" -2;
console.log(`"4" - 2 = ${bb} ==> Summary : when string datatype  holds a number as data ,Then the string will convert in a number ,due to "Implicit string conversion to number". `);
let cc ="4" *2;
console.log(`"4" * "2" = ${cc} ==> Summary : when string datatype  holds a number as data ,Then the string will convert in a number ,due to "Implicit string conversion to number". `);

console.log(" ");
console.log(`------------------------------Special cases----------------------------`);
console.log("");
console.log(`Operator == is used to covert two diffrent datatypes(operand) into common datatype.`);
let num1 = 0==" ";
console.log(`0==" " = ${num1} , here why, when string contain a value which is not a valid number then it will change it to Number "0" so here 0==0 which is "True" `);
console.log("");
let num2 = 0=="0";
console.log(`0=="0" = ${num2} , when string consist number as data , then the string will convert into number ,Implicit string conversion`);
console.log("");
let num3 = 0==false
console.log(`0==False is ${num3} , boolean False is equal to 0 , 0==0 is True `);
console.log("");
let num4 = null==undefined;
console.log(`null == undefined is ${num4} ,here both values are empty , null is intentionally kept empty , but undefined is not assigned , default empty , so this is true , but in === operator it wont show expected behaviour . `);
console.log("");
let num5 = 1==[1];
console.log(`1==[1] is ${num5} , here array contains 1 as number , which is can be shown as "1" , due to implicit coversion , its equal to 1 `);
console.log("");
let num6 = 1==true;
console.log(`1==True is ${num6} , True is boolean datatype which holds "1" as a value`);
console.log("");
let num7 = 1=="1";
console.log(`1=="1" is ${num7} , string is consist number as data ,by string implicit coversion it will convert to number`);