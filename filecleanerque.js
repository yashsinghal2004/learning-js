//file cleaner: remove extra spaces:
const stri="My  name is       yash";

const cleanedStr=stri.replace(/\s+/g," ");

console.log(cleanedStr);