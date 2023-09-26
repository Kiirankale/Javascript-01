
// Sure! Here are some problems to practice using if-else if loops in JavaScript:

// Grade Calculator:
// Write a program that takes a student's score as input and prints their corresponding grade using the following grading scale:
// 90 or above: A
// 80 to 89: B
// 70 to 79: C
// 60 to 69: D
// Below 60: F

// var gradeCalc = function (num) {
//     if (num>=90&&num<=100) {
//         console.log(` entered Grade is ${num} : Your grade is A`);
        
//     }
//      else if(num>=80&&num<=89) {
//         console.log(` entered Grade is ${num} : Your grade is B`);

        
//     } 
//      else if (num<=69&&num>=60) {
//         console.log(` entered Grade is ${num} : Your grade is C`);

        
//     } 
//      else if (num<=60) {
//         console.log(` entered Grade is ${num} :Your grade is F`);

        
//     } 
//     else if (num>=70&&num<=79) {
//         console.log(` entered Grade is ${num} : Your grade is C`);

        
//     } 
        
//     }
//     gradeCalc(56);
// //     Time of Day Greeting:
// // Create a program that takes the current hour as input (in 24-hour format) and outputs a suitable greeting message. For example:
// // 5 to 11: Good morning
// // 12 to 16: Good afternoon
// // 17 to 21: Good evening
// // 22 to 4: Good night
// var timeOfGreeting = function(time,min,sec){
//     if (time>=5&&time<=11) {
//         return `your entered time is ${time}:${min}:${sec} = Good morning`
        
//     }
//     else if (time>=12&&time<=16) {
//         return `your entered time is ${time}:${min}:${sec} = Good Afternoon`
        
//     } 
//     else if ((time>=22&&time<=23)||(time>=0&&time<=4)) {
//         return `your entered time is ${time}:${min}:${sec} = good night `
        
//     } 
//     else if (time>=17&&time<=21) {
//         return `your entered time is ${time}:${min}:${sec} = Good evening`
        
//     } 
//     else{
//         return `The entered value is ${time}:${min}:${sec}  = invalid `
//     }
        
    

// }
// // var result = timeOfGreeting(1,52,45);
// console.log(result);
    
// // Constants for time ranges
// const MORNING_START = 5;
// const MORNING_END = 11;
// const AFTERNOON_START = 12;
// const AFTERNOON_END = 16;
// const EVENING_START = 17;
// const EVENING_END = 21;
// const NIGHT_START = 22;
// const NIGHT_END = 4; // Note: This is 4 AM of the next day

// // Function to get the time of day
// function getTimeOfDay(hour) {
//     if (hour >= MORNING_START && hour <= MORNING_END) {
//         return "morning";
//     } else if (hour >= AFTERNOON_START && hour <= AFTERNOON_END) {
//         return "afternoon";
//     } else if (hour >= EVENING_START && hour <= EVENING_END) {
//         return "evening";
//     } else {
//         return "night";
//     }
// }

// // Function to format the greeting message
// function getGreetingMessage(timeOfDay, hour, minute, second) {
//     return `Your entered time is ${hour}:${minute}:${second} = Good ${timeOfDay}`;
// }

// // Main function to get the greeting based on the time
// function getTimeGreeting(hour, minute, second) {
//     if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59) {
//         const timeOfDay = getTimeOfDay(hour);
//         return getGreetingMessage(timeOfDay, hour, minute, second);
//     } else {
//         return "Invalid input. Please enter valid hour, minute, and second values.";
//     }
// }

// // Example usage:
// var result = getTimeGreeting(1, 52, 45);
// console.log(result);


// setTimeout(function () {
//     console.log("hiiii its me ");
    
// },5000)
// console.log('kiran 😂');

function show() {
    console.log("first normal function");
    
}
function geeky(callback) {
    callback();
    
}
geeky(show);
const calculate =(a,b,operations)=>{
    operations();

}
let operations =(num1,num2)=>{
    console.log(a*b);
    console.log(a%b);
    console.log(a-b);

}
calculate(5,9,operations());