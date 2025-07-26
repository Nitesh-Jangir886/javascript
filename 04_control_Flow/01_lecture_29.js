// for of loop  (mainly used for Array)

const arr = [1,2,3,4,5];

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello world"
for (const greet of greeting) {
    if(greet == " ")  continue;
    // console.log(`Each char is ${greet}`);   
}


// Maps -------- (map is a datatype)

  const map = new Map()

  map.set('IN', "India")
  map.set('USA', "United state of america")
  map.set('Fr', "France")
//   map.set('IN', "India")//Duplicates not allowed So hai isko dubara print nhi hone dega

//   console.log(map);


  for (const [key, value] of map) {
    // console.log(key, ':-', value);
  }


  //try it for objects

  const myObject = {
    name: "Nitesh",
    work: "No"
  }
  
  for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    // so object m iss tarike se iteration kaam nhi krta hai
  }
