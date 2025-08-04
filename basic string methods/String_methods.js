// // 1) String Length

// let lorem="ABCDEFGHIJKLMNOPQURSTUVWXYZ";
// console.log(lorem.length);

// // 2) String Characters
// console.log(lorem.charAt(2));

// // 3) String slice
// let text="Apple, banana, fig";
// console.log(text.slice(2,3));

// // 4) String substr
// let text1= "Apple, Banana, Kiwi";
// console.log(text1.substr(7,6));

// // 5) String substring
// let text2= "Apple, Banana, Kiwi";
// console.log(text2.substring(7,13));

// // 6) String UpperCase
// console.log(text.toLocaleUpperCase());

// // 7) String LowerCase
// console.log(text.toLocaleLowerCase());

// // 8) String Concat
// console.log(text+" "+text1);

// // 9) String Replace
// console.log(text.replace("Apple","harsh"));

// // 10) String split
// let sentance="Hello, how are you today?";
// console.log(sentance.split(" "))    



//---------------------------------------------------------- Exercise -----------------------------------------------------------------------


let originalString ="Hello, World!";
// task 1
console.log(originalString.length);

// task 2
console.log(originalString.charAt(0));

// task 3
console.log(originalString.substring(7));

// task 4
console.log(originalString.slice(7,12));

// task 5
console.log(originalString.toLocaleUpperCase());

// task 6
console.log(originalString.toLocaleLowerCase());    

// task 7
console.log(originalString.concat(" "+"Have a nice day!"));

// task 8
console.log(originalString.replace("World","Universe"));

// task 9
console.log(originalString.split(","));
