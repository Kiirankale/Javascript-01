// Array assignment 
const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
 console.log( arrayFruits[0]);
 console.log( arrayFruits[arrayFruits.length-1]);
 let addPapaya = arrayFruits.unshift("papaya");// method to add element from start .
 console.log(arrayFruits);
 arrayFruits.splice(4,1);// method to remove element from array.
 console.log(arrayFruits);
arrayFruits.splice(4,0,"Dragon Fruit");// method to add element without removing existing element.
console.log(arrayFruits);
arrayFruits.splice(2,1,"Kiwi");// method to add element by removing existing element.
console.log(arrayFruits);

// code to add elements  from index 1 to index 4 .
let emptyArray = [];  

for (let i  = 1; i <=4 ; i++) {
    
    emptyArray.push( arrayFruits[i]);
   

}
console.log(emptyArray);

console.log(arrayFruits[arrayFruits.length-3]);// method to print last 3 element

// assignment on Array with numbers ..
const arrayNumber =[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumber.length);// to calculate numbers of element in array 
console.log(arrayNumber[0]);// to print element at index 0.
console.log(arrayNumber[arrayNumber.length-1]);// to print last index of array .
console.log(arrayNumber[arrayNumber.length-3]);// to print third  last index of array .

// Code to check all even numbers from array .
let evenArray = [];
for (let index = 0; index <= arrayNumber.length; index++) {
    if (arrayNumber[index]%2==0) {
        evenArray.push(arrayNumber[index]);
        
    }
    
}
console.log(evenArray);


// Code to check all odd numbers from array .
let oddArray = [];
for (let index = 0; index <= arrayNumber.length-1; index++) {
    if (arrayNumber[index]%2!=0) {
        oddArray.push(arrayNumber[index]);
        
    }
    
}
console.log(oddArray);

// code to find all even positioned index of string 
let evenPositionedIndex = [];
for (let index = 0; index <= arrayNumber.length; index++) {
    if (index%2==0) {
        evenPositionedIndex.push(arrayNumber[index]);
        
    }
    
}
console.log(evenPositionedIndex);

// code to find all odd positioned index of string 
let oddPositionedIndex = [];
for (let index = 0; index <= arrayNumber.length-1; index++) {
    if (index%2!=0) {
        oddPositionedIndex.push(arrayNumber[index]);
        
    }
    
}
console.log(oddPositionedIndex);

// code to find  sum of array 
let sumOfArray =0;
for (let index = 0; index < arrayNumber.length-1; index++) {
    sumOfArray+=arrayNumber[index];
    
}
console.log(sumOfArray);

// Code to fine multiples of five from the string .    
  let multipleOfFive =[];
  for (let index = 0; index < arrayNumber.length-1; index++) {
    if (arrayNumber[index]%5==0) {
        multipleOfFive.push(arrayNumber[index]);
        
    }

  }  
  console.log(multipleOfFive);
  console.log(arrayNumber.includes(115));// method to search element in array .
  console.log(arrayNumber.includes(23));// method to search element in array .
  console.log(arrayNumber);
  console.log(arrayNumber.splice(3,0,55,66));//adding element before any existing element .
  console.log(arrayNumber);
  arrayNumber.splice(4,3);//Deleting element after any existing element.
  console.log(arrayNumber);




 
