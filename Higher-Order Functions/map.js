// EXAMPLE 1 
const number =[1,2,3,4,5];
const doubled=number.map(number=>number*2);
console.log(doubled);

// EXAMPLE 2
const fruits=["apple","banana","mango","orange"];
const uppercase=fruits.map(fruits=>fruits.toLocaleUpperCase());
console.log(uppercase);

// EXAMPLE 3
const user=[
    {
        id:1,
        name:"harsh makwana",
        age:20,
        study:"MCA"
    },
    {
        id:2,
        name:"het makwana",
        age:15,
        study:"10th"
    },
    {
        id:3,
        name:"dharmik makwana",
        age:25,
        study:"12th"
    }
]
const userName = user.map(user=>user.name);
console.log(userName);

// EXAMPLE 4 Discount Prices
const products = [
  {
    id: 1,
    title: "Laptop Backpack",
    price: 109.95,
    description: "A cool laptop backpack",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: 3.9,
  },
  {
    id: 2,
    title: "Casual T-Shirt for Men",
    price: 22.3,
    description: "Slim-fitting style, t-shoty for men",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: 4.1,
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for spring, autumn, or winter.",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "An aweome shirt for men",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title: "Women's Gold & Silver Bracelet",
    price: 695,
    description: "A very cool bracelet.",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: 400,
  }
];

const discountPrice=products.map(products=>{
    return {
        price:products.price *0.9
    }
})

console.log(discountPrice);

// EXAMPLE 5
const orders = [
  { id: 1, delivered: false },
  { id: 2, delivered: true },
  { id: 3, delivered: false }
];

const updateStatus=orders.map(orders=>{
    return {
        ...orders,
        status:orders.delivered?"delivered":"pending"
    };
});
console.log(updateStatus);

// EXAMPLE 6
const cart = [
  { name: "Pen", quantity: 3, price: 10 },
  { name: "Notebook", quantity: 2, price: 50 },
  { name: "Pencil", quantity: 5, price: 5 }
];

const invoice=cart.map(item=>{
    return {
        name:item.name,
        total:item.quantity*item.price
    };
});
console.log(invoice)

// EXAMPLE 7 : Capitalize Product Names
const items = ["laptop", "mobile", "keyboard", "mouse"];
const CapitalizeItems=items.map(items=>{
    return{
        name:items.charAt(0).toUpperCase()+items.slice(1).toLowerCase()
        
    };
});
console.log(CapitalizeItems);

// Exercise 8: Convert Student Marks to Grades
const marks = [92, 67, 48, 81, 35];
const grades = marks.map(marks => {
    if (marks>=90) {
        return "A";
    }else if (marks>=75) {
        return "B";
        }else if (marks>50) {
            return "C";
            }else {
                return "F";
    };
});

console.log(grades);

// Exercise 9: Add Tax to Prices
const prices = [100, 250, 500, 1000];
const pricetax=prices.map(prices=>{
    return prices+(prices*0.18);
});
console.log(pricetax);


//  Exercise 10: Mask Phone Numbers
const users = [
  { name: "Ravi", phone: "9876543210" },
  { name: "Neha", phone: "9123456789" }
];

const maskPhone=users.map(phone=>{
    return{
        phone:"*******"+phone.phone.slice(6)

    };
});
console.log(maskPhone);


//  Exercise 11: Usernames Generator
const userss = [
  { firstName: "Aman", lastName: "Sharma" },
  { firstName: "Tina", lastName: "Kapoor" }
];

const usernames=userss.map(userss=>{
    return userss.firstName.toLowerCase()+"."+userss.lastName.toLowerCase()
});
console.log(usernames);

// Exercise 12: Add Currency Format
const rs = [100, 250, 800, 1200];
const rupees=rs.map(rs=>{
    return "₹"+rs.toLocaleString();
});
console.log(rupees)