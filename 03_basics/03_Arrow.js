//  **************[ "THIS" Keyword] *****************

const user= {
    username: "Nitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to our website`);
        console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this); 

function chai(){
    let username = "Nitesh"
    // console.log(this.username); //only function mein "this" keyword kaam nhi krta hai 
   console.log(username); //ye chal jayega
     
}

// chai();


// ********************[ Arrow Functions ]*******************

const chaii = () => {
    let username = "NITesh";
    // console.log(this);
    console.log(username);
}
// chaii()

// const addTwo = (num1, num2) => {
// return num1 + num2;
// }

// console.log(addTwo(3,4));

//  Implicit return --- isme agar single line ka code ho function mein to hume curly braces lagane ki jarurat nhi hai

// const addTwo = (num1, num2) => num1 + num2
                    //OR
// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(3,4)); 

//Agar implicit return mein object declare krna ho to parenthesis mein curly bracket ka use krna hi padega 
const addTwo = (num1, num2) => ({username:"Nitesh"})
// console.log(addTwo(3,4)); 









