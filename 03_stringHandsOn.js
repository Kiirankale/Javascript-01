console.log(`                                                                                                                                              `);
console.log(`------------------Assignment No : 2----------------`);
console.log(`---------------Step No : 1--------------`)
var Name = `   Hey you are doing good, Keep it up   `;
console.log(`The given string is : Hey you are doing good,keep it up`);
 var a = Name.length;
 console.log(`---------------Step No : 2--------------`)
 console.log( `Length of the given string is : ${a}`);
 console.log(`---------------Step No : 3--------------`)

 var trim = Name.trim();
//  console.log(trim);
 console.log(`After trim string is : ${trim} and Length is ${trim.length}`);
 console.log(`---------------Step No : 4--------------`)
 var extraSpaces = Name.length - trim.length ;
 console.log(`Total number of extra Spaces in string is :${extraSpaces}`)
 console.log(`---------------Step No : 5--------------`);

 var charAtfirst = trim.charAt(0);
 var length = trim.length;
 var charAtlast = trim.charAt(length-1);
 console.log(`The First character in the String "${trim}" is :${charAtfirst} and Last is :${charAtlast}`);
 console.log(`---------------Step No : 6--------------`)
 
 var wordscount = trim.split(" ").length;
 console.log(`Total number of words in string are : ${wordscount}`);
 console.log(`---------------Step No : 7--------------`)
 var wordindex = Name.indexOf("good");
 console.log(`Index of word "good" is : ${wordindex}`);
 console.log(`---------------Step No : 8--------------`)
 var substring = Name.substring(26);
 console.log(`Substring starting with index 22 is :${substring}`);
 console.log(`---------------Step No : 9--------------`)

var num = trim.endsWith("up");
console.log(`String ends with "up" character is : ${num}`);
console.log(`---------------Step No : 10--------------`)
var num2 = trim.startsWith("Hey");
console.log(`String strating with "Hey" character is : ${num2}`);
