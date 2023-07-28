console.log(`------------------------------Assignment No : 1---------------------------------`)
var square = function(num){
   var  result = num*num;
    console.log(`The Square of number [${num}]  is  : ${result}`)
}
console.log(`------------------------------Step 1---------------------------------`)
square(5);
square(6);
square(12);

console.log( ` The type of variable is : ${typeof square } `);
console.log(`------------------------------Step 2---------------------------------`)

var areaOfRectangle = function(num1,num2){
    var result = num1*num2;
    console.log(`The Area of rectangle plot [Length =499 and Width=917] is : ${result} sq units. `)
}
areaOfRectangle(499,917);
console.log(`------------------------------Step 3---------------------------------`)

var swapData = function(string1,string2){
    console.log(`Before Swap : Value 1 = ${string1}, Value 2 = ${string2} `);
    let a = string1;
    let b = string2;
    temp = string1;
    a=b;
    b=temp;
    console.log(` After Swap : Value 1 = ${a}, Value 2 = ${b} `);
}
swapData("Mahi","Raina");
swapData(55,77);
console.log(`------------------------------Step 4---------------------------------`)

var stringFunc = function(string){
    console.log(`1)  Total numbers characters in string are : ${string.length}`)
    var charat = string.charAt(7);
    console.log(`2)  Character at index 7 is :${charat}`);
    var charat = string.charAt(12);
    console.log(`3)  Character at index 12 is :${charat}`);
     var lastchar =string.charAt(string.length-1);
     console.log(`4)  Last character of string is :${lastchar}`)
     var lastchar =string.charAt(string.length-3);
     console.log(`5)  Third Last character of string is :${lastchar}`);
     var result = string.split(" ");
     console.log(`6)  The number of Words in string are :${result.length}`);
     var sq = result.length*result.length;
     console.log(`7)  The square of number of words are : ${sq}`);

     
    
    

    

}
stringFunc("JS the most popular language of internet");