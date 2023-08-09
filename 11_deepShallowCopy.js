//Assignment No 1

let student = {
    Name:"kiran ",
    age:22,
    city:"pune",
}
let student1 = Object.assign({},student);
console.log(student1);
student1.Name="kk";
console.log(student);
console.log(student1);

let personalDetails = {
    name :" kiran Kale ",
    age : 25,
    role: "Angular Devloper",
    company :" Google ",

}
let collegeDetails = {
    collegeName : "Stanford California ",
    courses:["Angular","React","DSA","Java"],
    phoneNo :'023654',
    principalName :" Mark jobs",
    
}
 let newObject = Object.assign({},personalDetails,collegeDetails);
 console.table(newObject);


 let newArray = ["Satish","Sandhya","Jakir","Priya" ,"Ashwini"];
 Object.freeze(newArray);
 for (const element of newArray) {
    console.log(element);
    
 }


 // To reverse string 
 let newString = "Codemind Technology";

 // Find the index where "Technology" starts
 let technologyIndex = newString.indexOf("Technology");
 
 if (technologyIndex !== -1) {
     let wordToReverse = "Technology";
     let reversedWord = "";
 
     // Loop through the characters in reverse order
     for (let i = wordToReverse.length - 1; i >= 0; i--) {
         reversedWord += wordToReverse[i];
     }
 
     // Replace the original word with the reversed word
     let modifiedString = newString.substring(0, technologyIndex) + reversedWord + newString.substring(technologyIndex + wordToReverse.length);
 
     console.log(modifiedString); // Output: "Codemind ygolonhceT"
 } else {
     console.log("Word 'Technology' not found in the string.");
 }

 // Assignment 2
let bankSbi = {
    accountHolderName : "Kiran Kale",
    accountNum :1234565,
    branch :"Las vegas",
    ifscCode :"SBIN000125",
    
}

let bankLocation ={
    street : "queen palace,unity square",
    city: "Livingstone",
    pinCode :23156,
}

let newBank = Object.assign({},bankSbi);
let newLocation = Object.assign({},bankLocation);
console.log(newBank);
console.log(newLocation);

let rateOfInterest = {
    homeLoneInterest :"12%",
    personalLoanInterest:"16%",
    dueInterest:"7%",
}

let sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.table(sbiDetails);
console.log(`Transverse of merged object `);
console.log(" ");
for (const key in sbiDetails) {
   
        console.log(`${key} - ${sbiDetails[key]}`);
    
}