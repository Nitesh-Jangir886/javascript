
// object literals

//[interview ques --- how to acces symbol in objects]
const mySym = Symbol("key1")  //declare symbol here


const JsUser = {
    name: "Nitesh",
    [mySym]: "xyz.....", //access symbol in objects
    age: 18,
    location: "Jaipur",
    email: "Nitesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"],
    //Note 1 == Isme ye name, age,location,email___etc. ye sab bhi string hi hai bas ye show nhi krte hum code mein 
   "full name": "Nitesh Jangir"
}

//How to access objects---

// console.log(JsUser.email); 

// console.log(JsUser["email"]); //email string hai so string ki taraf declare kro(read Note 1)

// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);


//How to overWrite objrcts values

// JsUser.email = "Nit@gmail.com"
// Object.freeze(JsUser) //Isse aap kisi bhi object ko over write nhi kr sakte ho
// JsUser.email = "kingNitesh@gmail.com"
// console.log(JsUser);


//     declare some functions

JsUser.greeting = function(){
    console.log("hello Js user");    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //"this" se hum object ke andar kisi bhi object ko access kr sakte hai
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

