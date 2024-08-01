
let arr=["yahs","yes","ok"];

const calculate=(str)=>{
    console.log(str);
}

let beforedatetime=new Date();
const beforetimeinms=beforedatetime.getTime();
arr.forEach(calculate);
let afterdatetime=new Date();
const aftertimeinms=afterdatetime.getTime();

let durationinms=aftertimeinms-beforetimeinms;
console.log("Duration in milliseconds: ",durationinms);