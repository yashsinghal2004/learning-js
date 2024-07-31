//callback function
const callbackfunc=(a,b,ansfunction)=>{
    console.log(ansfunction(a,b));
}

const sumfunction=(a,b)=>{
    let result=a+b;
    return result;
}
 callbackfunc(3,5,sumfunction)
