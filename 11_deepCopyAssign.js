const arrayNum = [20, 3, 4, 56, 90, 400, 49];
const newArray = arrayNum;
console.log(newArray);
newArray.push(55, 66);
console.log(newArray);

let newArray1 = [...arrayNum];
console.log(newArray1);
arrayNum.push(10, 25);
console.log(arrayNum);

let array3 = [2, 30, 14, 8];
let newArray3 = [...array3, ...arrayNum];
console.log(newArray3);



// Step 3 
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR",
    },
    address: {
        locality: {
            coloney: "Om Vrindavan Society",
            street: "Kanch Pokli,431202",

        },
        city: "Mumbai",
        state: "Maharastra",
        country: "India",
    },
    mobiles: ["+91 8600 3656 23", "+91 8956 7745 65"]
}

console.log(`Address : ${employee_info.address.locality.coloney},${employee_info.address.locality.street},${employee_info.address.state},${employee_info.address.country}`);
console.log(` employee numbers = ${employee_info.mobiles}`);

let deepCopyOfEmployeeInfo = JSON.parse(JSON.stringify(employee_info));
console.log(deepCopyOfEmployeeInfo);
deepCopyOfEmployeeInfo.salary.july_month = "80,000INR";
console.log(deepCopyOfEmployeeInfo.salary.july_month);
employee_info.address.country ="United Kingdom";
console.log(employee_info.address.country);

console.log(`Updated values in original object 1) Country =  ${employee_info.address.country}`);
console.log(`Updated values in cloned object 1) July month =  ${deepCopyOfEmployeeInfo.salary.july_month}`);