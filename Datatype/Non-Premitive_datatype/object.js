// const cource={
//     lecture:10,
//     CourceName:"javascript",
//     CourceSubscription:35000,
//     Notes:{
//         intro:"Welcome to Javascript cource",
//     },
//     enroll(){
//         console.log("yoy are succefully enrolled");
//     }
// }
// cource.enroll();
// console.log(cource);

//FACTORY FUNCTION
// function createCource(title) {
//     return {
//         title: title,
//         enroll() {
//             console.log("you are succefully enrolled");
//         }
//     }
// }

// const newCource= createCource('Javascript');

// //CONSTRUCTOR FUNCTION
// function Cource(title) {
//     this.title = title,
//     this.enroll=function(){
//         console.log("you are succefully enrolled");
//     }
// }
// const cource=new Cource('Javascript');
// cource.enroll();
// -------------------------------------------------------------------------------Exercise---------------------------------------------------------------------------------// 
const std={
    name:"harsh makwana",
    age:21,
    grade:"A1",
    subject:["Java","C++","React js","Tailwind CSS"],
    displayInfo: function() {
        console.log("Student Information:");
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Grade: " + this.grade);
        console.log("Favorite Subjects: " + this.subject.join(", "));
    }
}
std.displayInfo();