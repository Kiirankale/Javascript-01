console.log(`---------------------------------EVEN OR ODD---------------------------------------`);
var checkevenOdd = function(num){
if (num%2==0) {
     console.log(`The entered num [${num}] is EVEN .`);
    
    
    
    
}
else{
    console.log(`The entered num[${num}] is ODD. `)
}
}
checkevenOdd(45);
checkevenOdd(70);
checkevenOdd(67);
checkevenOdd(98);
console.log(`---------------------------------String length ---------------------------------------`);

var checkString = function(string){
    if (string.length>=10 && string.startsWith("Java")) {
        console.log(`The string [${string}] contains more than 10 characters . `);
        console.log(" ");
         console.log(`The string[${string}] starts with "Java" `);
         console.log(" ");
       
        
        
    }
    else{
        console.log(`String doesnt `);
        
    }
    }
     checkString("Javascript -ES6")
     checkString("Javascript Language")
    

console.log(`---------------------------Voting Age Calculation---------------------------------`);
console.log(" ");
let voting_Age =18;
let max_Age = 130;
let checkVotingAge = function(age){
    // For invalid 
    if (typeof age!=='number'|| isNaN(age) ||age<=0||age>max_Age) {
        console.log(`The entered Value "${age}" is Invalid. Please try valid age .`);
        console.log(" ");
        
    }
    else if (age<voting_Age) {
        console.log( `The entered value is "${age}" - You are not eligible for vote .`);
        console.log(" ");
        
    } else { 
       console.log( `Your age is "${age}" - You are eligible to vote .`);
       console.log(" ");
        
    }
    
}
  checkVotingAge(45);
  checkVotingAge(17);
  checkVotingAge(8);
  checkVotingAge(20);
  checkVotingAge(-10);
  checkVotingAge(200);
  checkVotingAge(0);
  checkVotingAge(undefined);
  checkVotingAge(null);
