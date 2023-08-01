// To find vowels from string 
let totalVowels = function (sentence) {
    let count = 0;
    let index = 0;
    let aaa = [];
    while (index <= sentence.length - 1) {
        let char = sentence.charAt(index);
        index++;
        if (char == 'a' || char == 'A' || char == 'e' || char == 'E' || char == 'i' || char == 'I' || char == 'o' || char == 'O' || char == 'u' || char == 'U') {
        //  console.log(char);
         aaa.push(char);
         
         count++;

        }
        

    }
    let vowelString  = aaa.join(" ")
    console.log(vowelString);
    console.log(`The total numbers of vowels are ${count}`);
    

}
totalVowels("I am a very good UI developer");


// program for cube of number using while loop .
let cubeOfNum = function() {
    let num = 1;
    let totalNumber = " ";
    let sum=0;
    while (num<=5) {
      number = num*num*num;
        // console.log(num);
        num++;
        sum+=number;

       
        totalNumber = totalNumber.concat(" " + number)
        
    }
    console.log(`Cubes = ${totalNumber}`);
    
    console.log(`sum of cubes  = ${sum}`);
    
   
    
    
}
cubeOfNum();

// To find odd positions in string 
function oddPositionChars(inputString) {
    if (typeof inputString !== "string") {
      console.error("Input must be a string.");
      return;
    }
  
    let oddPositionedChars = "";
    let i = 0;
    while (i < inputString.length) {
      if (i % 2 === 0 && inputString[i] !== " ") {
        oddPositionedChars += inputString[i];
      }
      i++;
    }
  
    console.log(oddPositionedChars);
  }
  oddPositionChars("Hard work always pays back");
  oddPositionChars("Soon i will become Angular IT champ");


  // program to reverse string ignoring blank spaces 
  function reverseString(inputString) {
    if (typeof inputString !== "string") {
      console.error("Input must be a string.");
      return;
    }
  
    let reversedString = "";
    let i = inputString.length - 1;
  
    while (i >= 0) {
      if (inputString.charAt(i) !== " ") {
        reversedString += inputString.charAt(i);
      }
      i--;
    }
  
    console.log(reversedString);
  }
  reverseString("Hard work always pays back");
  reverseString("Soon i will become Angular IT champ");

  
  
  
  