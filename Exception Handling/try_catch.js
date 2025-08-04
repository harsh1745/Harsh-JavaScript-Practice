// function getElementAtIndex(arr,index) {
//     try {
//         if(typeof index!=="number" || index<0 ||index>=arr.length){
//             throw new Error("Invalid index:Index is out of bounds or not defined properly.");
//         }
//         return arr[index];
//     } catch (error) {
//         return error.message;
        
//     }
// }

// let myArray=["apple","banana","mango"];
// console.log(getElementAtIndex(myArray,1));
// console.log(getElementAtIndex(myArray,5));
// console.log(getElementAtIndex(myArray,-1));
// console.log(getElementAtIndex(myArray));



try {
    let user = "Harsh";
    console.log(user.toUpperCase());

    let result = 10 / 0;
    if (result === 0) {
        throw new Error("Division by zero is not allowed!");
    }
} catch (err) {
    console.log("Caught Error:", err.message);
} finally {
    console.log("Code cleanup done.");
}
