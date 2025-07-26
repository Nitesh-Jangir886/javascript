//const tinderUser = new Object()   //This is a singleton object
//const tinderUser = {}   //This is a non singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Nitesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "nitesh@gmail.com",
    fullname: { // object m object declare kr sakte hai
    userfullname:{
        firstname:"Nitesh",
        lastname:"Jangir"
    }
    }
}

// console.log((regularUser.fullname));
// console.log((regularUser.fullname.userfullname));
// console.log((regularUser.fullname.userfullname.firstname));


//How to add to objects------

const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"a", 4:"b"}

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2} //spread way to cobine objects
console.log(obj3);;


const users = [ //aray mein object banayenge
{
    name: "xyz",
    email: "xyz@gmail.com"
},
{
    name: "xyz",
    email: "xyz@gmail.com"
},
{
    name: "abc",
    email: "abc@gmail.com"
},
{
    name: "xyz",
    email: "xyz@gmail.com"
}
]

// console.log( users[1].email); 
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin')); // ye batayega ki object mein vo value exist krti hai ya nhi


