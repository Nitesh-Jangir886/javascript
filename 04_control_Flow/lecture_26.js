// IF

// if(true){

// }


// *****************************
// const useremail = [] //ye truthy value hai isiliye ye true condition m jayega
// const useremail = "" //ye falsy value hai isiliye ye false condition m jayega

// if(useremail){
//     console.log("Got user email"); 
// }else{
//     console.log("Don't have user email"); 
// }

// *******************

//falsy value ----------:
// false, 0, -0, BigInt --> 0n , empty string --> "" , null, undefined, NaN

//Truthy values
// "0", 'false', " ",  [], {}, function(){}

// **************[How to check Array is Empty]************
// const useremail = []

// if(useremail.length === 0){
//     console.log("Array is empty");
// }

// **************[How to check object is Empty]************
// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
    
// }


// Nullish Coalescing operator (??) : null undefined
//simply ye check krta hai ki agar system kabhi null value, error value, undefined value aesa aa jaye to ye kya kuch or value system se lake de sakta hai kya
// eg-->

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15


// console.log(val1);


//*** [Ternary Operator] ----:

// condition ? true ? false

// eg---
const iceTeaprice = 100
iceTeaprice <=80 ? console.log("yes") : console.log("No");

