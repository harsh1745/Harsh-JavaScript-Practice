// const a = (setTimeout() => {
//     console.log("hello");
// }, 2000);

//clearTimeout
// Define a function to be executed after a delay
function delayedFunction() {
  console.log('Delayed function executed');
}
// Set up a timeout to execute the delayedFunction after 3 seconds
const timeoutId = setTimeout(delayedFunction, 3000);
// Clear the timeout before it executes
clearTimeout(timeoutId);
console.log('Timeout cleared before execution');
