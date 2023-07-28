console.log("---------------------------------------------TCS Eligibility------------------------------------------------- ");
function tcsEligibility(num1,num2,num3,string){
    if (num1>=70 && num2>=80 && num3>=90) {
        console.log(`--------------------------------------------------------------------------------------------------------------`);
        console.log(`Your entered details are : 1)Grad Score = ${num1}% 2) HSC score =${num2}% 3) SSC score = ${num3}% 4) Name = ${string}  `);
        console.log(" ");
        console.log(`Congrats ${string} , You are eligible for the drive`);
        
        console.log(" ");

        
    }
    else{
        console.log(`-----------------------------------------------------------------------------------------------------------------`);
        console.log(`Your entered details are : 1)Grad Score = ${num1}% 2) HSC score =${num2}% 3) SSC score = ${num3}% 4) Name = ${string}  `);
        console.log(" ");
        console.log(`Sorry ${string} , You are not eligible for the drive .`);
        console.log(" ");
    }
}
tcsEligibility(80,86,90,"Kiran Kale")
tcsEligibility(70,65,55,"Satish Singh Yadav")
tcsEligibility(60,79,88,"Katrina Kaif")

// program to check marraige eligibility
console.log("---------------------------------------- Male Marriage Eligibility--------------------------------------------------------- ");
console.log(" ");

function marraigeEligibility(name,gender,age) {
    console.log(`Your Details are Name : ${name}, Gender :${gender}, Age :${age}`);

    var a = gender==="Male" && age>=18 ? `Hey ${name},You are eligible for the marraige`: `Sorry ${name} ,You are not eligible for the marraige`;
    return a ;

    
}

 var a = marraigeEligibility("Bill Gates","Male",25);
console.log(a);
console.log(" ");
 var a = marraigeEligibility("Kiran Kale","Male",17);
console.log(a);
console.log(" ");
console.log("--------------------------------------------Female Marriage Eligibility----------------------------------------------------- ");
console.log(" ");


function girlMarraigeEligibility(girlName,gender,age) {
    console.log(`Your Details are Name : ${girlName}, Gender :${gender}, Age :${age}`);

    var a = gender==="Female" && age>=18 ? `Hey ${girlName},You are eligible for the marraige`: `Sorry ${girlName} ,You are not eligible for the marraige`;
    return a ;

    
}

 var a = girlMarraigeEligibility("Jenifer","Female",25);
console.log(a);
console.log(" ");
 var a = girlMarraigeEligibility("Katrina kaif","Female",17);
console.log(a);
