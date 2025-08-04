for (let i = 1; i <= 100; i++) {
    if(i%2==0){
        console.log(i);    
    }
}



console.log("Even numbers using while loop:");
let j = 1;
while (j <= 100) {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++;
}

console.log("Even numbers using do while loop:");

let h=1;
do {
    if (h%2===0) {
        console.log(h)
    }
    h++;
} while (h<=100);


let row=5;
for (let i = 0; i <=row; i++) {
    let patten="";
    for (let j = 0; j <=i; j++) {
        patten+="*";
    }    
    console.log(patten);
}

let rows = 5;

for (let i = rows; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += j;
    }
    console.log(pattern);
}
