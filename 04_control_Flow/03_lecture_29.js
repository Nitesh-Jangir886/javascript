// For Each Loops  (mostly useable loop)

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (xyz) {
//     console.log(xyz);
// })

// arrow function se try krte hai

// coding.forEach( (xyz) => {
//     console.log(xyz);
// })


// second way of declaring for Each loop

// function printMe(xyz){
//     console.log(xyz);
// }

// coding.forEach(printMe);


// coding.forEach( (item, index, arr) => { // item , index and arr ki jagah hum kuch bhi likh sakte hai but ye value to unhiki dega
//     console.log(item, index, arr);
// })




const code = [
    {
        langName: "javaScript",
        langFile:"js"
    },
     {
        langName: "java",
        langFile:"j"
    },
     {
        langName: "c++",
        langFile:"cpp"
    },
    {
        langName: "c",
        langFile:"c"
    }    
]

code.forEach( (item) => {
    // console.log(item.langName); //this is how we access objects from array
})


//Note ==> For Each loop koi bhi value return nhi krta hai
// eg--
// const values = coding.forEach( (item) =>{
//     // console.log(item);
//     return item;
// })
// console.log(values);
