// Exercise 1
const numbers = [2, 3, 4, 5];
const numbers2=numbers.reduce((acc,cv)=>(acc*cv),1)
console.log(numbers2);

// Exercise 2
const words = ['Hello', 'world', 'from', 'JavaScript'];
const word2=words.reduce((acc,cv)=>(acc+" "+cv))
console.log(word2);

// Exercise 3

const items = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
]
const total=items.reduce((acc,cv)=>(acc+cv.price),0)
console.log(total);

// Exercise 4
const numbers1 = [45, 90, 12, 76, 33];
const MaxNum=numbers1.reduce(()=>(
    Math.max(...numbers1)
))
console.log(MaxNum);

// Exercise 5 Count Total Items in a Cart (Quantities)
const cart = [
  { item: "Shoes", quantity: 2 },
  { item: "T-shirt", quantity: 3 },
  { item: "Watch", quantity: 1 }
];

const totalItems=cart.reduce((acc,items)=>(acc+items.quantity),0)
console.log(totalItems);
