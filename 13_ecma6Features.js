function addingParameter(num1,num2,num3,...num) {
    let sum = 0;
   sum =+num1+num2+num3 ;
   for (let index = 0; index < num.length; index++) {
    sum += num[index];
    
   }
   console.log(sum);
}
addingParameter(1,2,3,4,5)