
const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Nitesh"
}

// console.log(course.courseInstructor);
                // or
// const {courseInstructor} = course
// console.log(courseInstructor);
                // or
const {courseInstructor: instruct} = course //you can also give nickname here (Destructuring)
console.log(instruct);             



// // how to declare JSON
  
// // {} // ye hi hota hai jason curly bracket

// {
//   "name": "Nitesh",
//   "course": "JavaScript",
//   "price": 3444
// }

// //JSON array

// [
//     {}
//     {}
//     {}
// ]