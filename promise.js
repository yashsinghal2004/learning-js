
let a= new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Hi there");
    }, 2000);
});
console.log(a);
const solve=(data)=>{
    console.log(data);
}

a.then(solve);