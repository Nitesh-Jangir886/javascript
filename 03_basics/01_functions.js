 
//  function saymyName(){
//     console.log("N")
//     console.log("I")
//     console.log("T")
//     console.log("E")
//     console.log("S")
//     console.log("H")
//  }
 //sayMyName() //function call
//  saymyName  //function ka refrence


//kabhi apne ko nhi pta hote ki kitni arguments aane wale hai to hum uss hisab se parameters ko prepare krna padta hai.---------------------

function calculateCartPrice(...num1){ //... means rest or spread operator
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 500, 20000));


// How to pass object in functions 
const user = {
    username: "Nitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "Sir",
    price: 399
})

//How to pass arrays

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 100, 500]));



