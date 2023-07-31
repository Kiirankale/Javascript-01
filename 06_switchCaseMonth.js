var monthofYear = function(month) {
    switch (month) {
        case 1:
            console.log(`Entered Value is ${month} : January`);
            break;
    
        case 2:
            console.log(`Entered Value is ${month} : February`);
            break;
    
        case 3:
            console.log(`Entered Value is ${month} : March`);
            break;
        case 4:
            console.log(`Entered Value is ${month} : April`);
            break;
        case 5:
            console.log(`Entered Value is ${month} : May`);
            break;
        case 6:
            console.log(`Entered Value is ${month} : June`);
            break;
        case 7:
            console.log(`Entered Value is ${month} : July`);
            break;
        case 8:
            console.log(`Entered Value is ${month} : August`);
            break;
        case 9:
            console.log(`Entered Value is ${month} : September`);
            break;
        case 10:
            console.log(`Entered Value is ${month} : Octomber`);
            break;
        case 11:
            console.log(`Entered Value is ${month} : November`);
            break;
        case 12:
            console.log(`Entered Value is ${month} : December`);
            break;
    
        default:
            console.log(`Entered Value is ${month} : Invalid data ,Provide valid input .`);

            break;
    }
    
}
var array = [0,2,5,12,15,100,null,undefined];
for (let i = 0; i < array.length; i++) {
    monthofYear(array[i]);
    console.log(" ");
    
}

