let fs=require('fs');

let a= new Promise((resolve)=>{
    setTimeout(()=>{
        fs.readFile()
    }, 2000);
});
console.log(a);
const solve=(data)=>{
    console.log(data);
}

a.then(solve);