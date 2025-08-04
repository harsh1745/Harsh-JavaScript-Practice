// Exercise 1
const numbers = [-1, 5, 0, -10, 8, -3, 2];
const positiveNumbers = numbers.filter((num) => num > 0);
console.log(positiveNumbers);

// Exercise 2 Exercise 1: Filter even numbers
const numbers1 = [10, 15, 20, 25, 30];
const evenNumber = numbers1.filter((numbers1) => numbers1 % 2 == 0);
console.log(evenNumber);

// Exercise 3 Exercise 1: Filter odd numbers
const numbers2 = [10, 15, 20, 25, 30];
const oddNumber = numbers2.filter((numbers2) => numbers2 % 2 != 0);
console.log(`odd number is ${oddNumber}`);

// Exercise 4: Get adults only (age >= 18)
const people = [
  { name: "Harsh", age: 17 },
  { name: "Simran", age: 22 },
  { name: "Amit", age: 15 },
  { name: "Neha", age: 30 },
];
const adults = people.filter((people) => people.age <= 18);
console.log(adults);

//  Exercise 5: Remove falsy values
const values = [0, "Harsh", false, null, "JavaScript", "", undefined];
const filteredValues = values.filter((value) => value);
console.log(filteredValues);

//  Exercise 6: Get in-stock products
const products = [
  { name: "Shoes", inStock: true },
  { name: "Shirt", inStock: false },
  { name: "Watch", inStock: true },
];
const stockInProducts = products.filter(
  (products) => products.inStock === true
);
console.log(stockInProducts);

// Exercise 7: Filter words longer than 4 letters
const words = ["html", "css", "react", "nodejs", "api"];
const longWord = words.filter((words) => {
  if (words.length > 4) {
    return words;
  }
});
console.log(longWord);

// Exercise 8: Customers with unpaid invoices
const customers = [
  { name: "Riya", invoicePaid: true },
  { name: "Raj", invoicePaid: false },
  { name: "Meera", invoicePaid: false },
];
const unpaidCustomers = customers.filter((customers) => {
  if (customers.invoicePaid == false) return customers;
});
console.log(unpaidCustomers);

// Exercise 9: Get only verified users
const users = [
  { username: "dev123", verified: true },
  { username: "guest99", verified: false },
  { username: "admin", verified: true },
];
const userVerifed = users
  .filter((user) => user.verified === true)
  .map((user) => user.username);
console.log(userVerifed);

// Exercise 10: Tasks that are incomplete
const todos = [
  { task: "Do laundry", completed: true },
  { task: "Study JS", completed: false },
  { task: "Buy milk", completed: false },
];
const incomplete = todos.filter((todos) => todos.completed === false);
console.log(incomplete);

//  Exercise 10: Filter Blog Posts with 100+ Likes
const posts = [
  { title: "JS Tips", likes: 150 },
  { title: "HTML Basics", likes: 90 },
  { title: "React Hooks", likes: 120 },
];

const popularPosts = posts.filter((posts) => posts.likes >= 100);
console.log(popularPosts);

// ---------------------Advanced Real-World Exercises Using filter() + map()-----------------

// 1. Verified Users' Names Only
const users1 = [
  { name: "Harsh", verified: true },
  { name: "Riya", verified: false },
  { name: "Dev", verified: true },
  { name: "Meena", verified: false },
];
const verifiedUsers = users1
  .filter((users1) => users1.verified === true)
  .map((users1) => users1.name);
console.log(verifiedUsers);
// ✅ Output: ["Harsh", "Dev"]

// 2. High-Scoring Students (Score > 80), Convert to Uppercase Names
const students = [
  { name: "Harsh", score: 90 },
  { name: "Amit", score: 75 },
  { name: "Neha", score: 85 },
];
const highScoring = students
  .filter((students) => students.score > 80)
  .map((students) => students.name.toUpperCase());
console.log(highScoring);
// ✅ Output: ["HARSH", "NEHA"]

// 3. Products In Stock - Show Only Name & Price
const products1 = [
  { name: "Laptop", price: 45000, inStock: true },
  { name: "Mouse", price: 800, inStock: false },
  { name: "Monitor", price: 7000, inStock: true },
];

const inStockProducts = products1
  .filter((products1) => products1.inStock === true)
  .map((products1) => {
    return {
      name: products1.name,
      price: products1.price,
    };
  });
console.log(inStockProducts);
// ✅ Output: [{name: "Laptop", price: 45000}, {name: "Monitor", price: 7000}]

// 4. Orders That Are Delivered - Return Message
const orders = [
  { id: 1, status: "delivered", customer: "Ravi" },
  { id: 2, status: "pending", customer: "Priya" },
  { id: 3, status: "delivered", customer: "Aman" },
];
const orderDelivered = orders
  .filter((orders) => orders.status === "delivered")
  .map((orders) => {
    return `Order for ${orders.customer} is delivered`;
  });
console.log(orderDelivered);
// ✅ Output: ["Order for Ravi is delivered", "Order for Aman is delivered"]

// 5. Employees With Salary > 50k - Return Custom Message
const employees = [
  { name: "Harsh", salary: 60000 },
  { name: "Amit", salary: 45000 },
  { name: "Simran", salary: 70000 },
];
const emp = employees
  .filter((employees) => employees.salary > 50000)
  .map((employees) => {
    return `${employees.name} erans ${employees.salary}`;
  });
console.log(emp);
// ✅ Output: ["Harsh earns ₹60000", "Simran earns ₹70000"]

// 6. Tasks That Are Completed - Show Only Titles in Capital Letters
const tasks = [
  { title: "Fix login", done: true },
  { title: "Add cart", done: false },
  { title: "Update UI", done: true },
];

// ✅ Output: ["FIX LOGIN", "UPDATE UI"]
const taskDone = tasks
  .filter((tasks) => tasks.done === true)
  .map((tasks) => tasks.title.toUpperCase());
console.log(taskDone);

// Exercise
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'Pride and Prejudice', author: 'Jane Austen' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
];
const authorToFilterBy = 'George Orwell';

const filteredBooks = books.filter(book => book.author === authorToFilterBy);
console.log(filteredBooks);