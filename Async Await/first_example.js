function WaittwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("2 second ke bad display hua hai...");
        }, 3000);
    });
}

async function getData() {
    console.log("Data lene jaa raha hai...");
    const result=await WaittwoSecond();
    console.log("result mila",result);
}

getData();