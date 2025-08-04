const URL="https://picsum.photos/v2/list";

const AuthorName=document.querySelector("#author_name");
const btn=document.querySelector("#btn");


const getData=async ()=> {
    console.log("getting.....");
    let response= await fetch(URL);
    console.log(response);
    let data=await response.json();
    // console.log(data[0].author);
    
    AuthorName.innerText=data[0].author;
};
btn.addEventListener("click",getData);