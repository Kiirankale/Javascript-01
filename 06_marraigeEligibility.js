var marriageEligibility = function(string,Age) {
   if (string=="Male" && Age>=21) {
    console.log(`Your gender is ${string} , Age :[${Age}] : You are eligible for marraige .`);
    
   } 
    else if (string=="Female" && Age>=18) {
    console.log(`Your gender is ${string} , Age :[${Age}] : You are eligible for marraige .`);
    
   } else {
    console.log(`Your gender is ${string} , Age :[${Age}] : You are not eligible for marraige .`);
    
   }
    
}
marriageEligibility("Male",17)
marriageEligibility("Male",25)
marriageEligibility("Female",28)
marriageEligibility("Female",16)
marriageEligibility("Other",35)
marriageEligibility("Other",41)
console.log(" ");
console.log(`--------------------------------------------Leap year------------------`);
var checkLeapYear = function (Year) {
    if ( typeof Year !== 'number' || isNaN(Year)) {
        console.log(`The entered year is [${Year}] : Invalid data`);
        
    }
    else if  (Year % 4 === 0 && (Year % 100 !== 0 || Year % 400 === 0)) {
        console.log(`The Entered Year [${Year}] is : Leap Year`);
    }
     
     else {
            console.log(`The Entered Year [${Year}] is : Not a Leap Year`);
        }
}

var inputsArray = [2020,1999,1600,2022,1945,null,"Twenty Twenty",undefined,NaN,1750]
for (i = 0;  i< inputsArray.length; i++) {
    checkLeapYear(inputsArray[i]);
    
}