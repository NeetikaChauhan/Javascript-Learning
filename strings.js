let  str1 = "Hello , String ";
let str2 = 'This is a string';
let str3 = `back tick string`;

console.log(typeof str1 ,typeof str2 ,typeof str3 )
console.log(typeof(str1)  ,typeof str2 ,typeof str3 )
console.log(str2.length);
console.log(str2[2]);



console.log("****************** String  Manipulation **************")

let str4 = "Hello";
let str5 = "World";


let result = str4 + " " + str5;
let resultTwo = str4.concat(" ",str5); // or str4.concat(str5);

console.log(result);
console.log(resultTwo);


console.log("****************** String  Substring **************")


let str6 = "Hello , world";
 let resultThree = str6.slice(7);
 let resultFour = str6.substring(7);
 console.log(resultThree);
 console.log(resultFour);