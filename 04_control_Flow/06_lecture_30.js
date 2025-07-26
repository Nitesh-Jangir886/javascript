// Reduce funtion

const myNums = [1,2,3];

const myTotal = myNums.reduce( function (accumulator, currentvalue){
    console.log(`accumulator: ${accumulator} and current value ${currentvalue}`);
        return accumulator + currentvalue;
},0) //yaha jo bhi value comma lagake denge vohi accumulator ki intial value hogi

console.log(myTotal);




const shoppingCart = [
    {
        itemName:"js course",
        price: 2999
    },
       {
        itemName: "java course",
        price: 3999
    },
       {
        itemName: "c++ course",
        price: 4999
    },
       {
        itemName: "python course",
        price: 10999
    },
       {
        itemName: "web dev course",
        price: 1500
    },
]


const mytotal = shoppingCart.reduce( (acc, item) => {
    return acc + item.price ;
},0)

console.log(mytotal);

