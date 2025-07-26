//  const marvel_hero = ["Ironman", "spiderman", "Hulk"];
//  const DC_hero = ["Batman", "Superman", "Flash"];

// //  marvel_hero.push(DC_hero); // Adds the DC_hero array as a new element
// //  console.log(marvel_hero); // Outputs: ["Ironman", "spiderman", "Hulk", ["Batman", "Superman", "Flash"]]
 
//  const all_hero = marvel_hero.concat(DC_hero);
//  console.log(all_hero); // Outputs: ["Ironman", "spiderman", "Hulk", "Batman", "Superman", "Flash"]
 
//  //spread method (work like concate and push)
// const newarr = [...marvel_hero, ...DC_hero];
// console.log(newarr); // Outputs: ["Ironman", "spiderman", "Hulk", "Batman", "Superman", "Flash"]


// const another_arr = [1, 2, 3, [4,5,6], 7,8,[9,10, [11,12, [23, 34]]], 56];

// const real_another_arr = another_arr.flat(Infinity); // Flattens the array to a single level
// console.log(real_another_arr);


console.log(Array.isArray("Nitesh")); // false - "Nitesh" is not an array
console.log(Array.from("Nitesh")); // ["N", "i", "t", "e", "s", "h"] - Converts string to an array of characters
console.log(Array.from({name: "Nitesh" })); 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Creates an array with the given scores: [100, 200, 300]
