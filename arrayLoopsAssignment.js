let array =[4,5,4,5,8,5,7,8,9,7,8];
let newArray =[ ];
for (let index = 0; index < array.length-1; index++) {
    if (!newArray.includes(array[index])) {
        newArray.push(array[index]);

        
    }
    
}
console.log(newArray);