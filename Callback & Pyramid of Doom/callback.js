// // const orderPizza=(callback)=>{
// //     console.log("pizza order kiya...");
// //     console.log("ban raha hai...");
// //     callback();
// // }

// // orderPizza(()=>{
// //     console.log("pizza deliver ho gaya hai!");
// // });

// // const homeworkComplete=(whenDone)=>{
// //     console.log("homework kar raha hu");
// //     whenDone();
// // }
// // homeworkComplete(()=>{
// //     console.log("homework complete ho gaya");
// // })

// // EXAMPLE 1
// function fetchData(callbackHarsh){
//     setTimeout(() => {
//         const data=[1,2,3,4,5,6,7,8,9,10];
//         callbackHarsh(data);
//     }, 2000);
// }

// function processData(data) {
//     console.log("data recived:",data);
    
// }

// fetchData(processData);

// //----------------------------------------------------------
// const fetchData1=(callbackNames)=>{
//     setTimeout(() => {
//         const name=["harsh","het","dharmik","sujal","sahil"];
//         callbackNames(name);
//     }, 2000);
// }

// const processDataName=(name)=>{
//     console.log("Names:",name);
    
// }
// fetchData1(processDataName);
// //----------------------------------------------------------

// const fetchData2=(callbackNew)=>{
//     setTimeout(() => {
//         const data1=[1,2,3,4,5,6,7,8,9,10];
//         callbackNew(data1);
//     }, 2000);
// }

// const processData1=(data1)=>{
//     console.log("data recived:",data1);
// }
// fetchData2(processData1);

//------------------------------------------------------------
const fetchData=(callback)=>{
    setTimeout(() => {
        const data=["harsh","makwana"];
        callback(data);
    }, 1000);
}

const processData=(data)=>{
    console.log("data is ",data);
}

fetchData(processData);
