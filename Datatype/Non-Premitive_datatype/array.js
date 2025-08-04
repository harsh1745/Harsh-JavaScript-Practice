const fruits =["apple", "banana", "cherry", "date", "elderberry"];

// first task
console.log(fruits[0]);

// second task 
fruits.push("fig");
console.log(fruits);

// third task
fruits.splice(2,1);
console.log(fruits);

// four task
console.log(fruits.length);


// fifth task 
if (fruits.includes("banana")) {
    console.log("yes banana is in the array")    
} else {
    console.log("no banana is in the array")    
    
}

// sixth task 
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(element);
    
}