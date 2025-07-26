 // For In Loop  (mainly used for Objects)

 const myObject = {
    js: "Javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
 }

 for (const key in myObject) {
//   console.log(key); //it print only keys
// console.log(myObject[key]); // it prints value  
 }

 const programming = ["js", "rb", "py", "java"];

 for (const key in programming) {
//    console.log(key); // Ye to array ka index return kr dega --0,1,2,3
//    console.log(programming[key]); //ye value print krega
 }



   const map = new Map()

  map.set('IN', "India")
  map.set('USA', "United state of america")
  map.set('Fr', "France")

for (const key in map) {
   console.log(key); // map yaha kaam nhi krega b/c iterative nhi hai
}

