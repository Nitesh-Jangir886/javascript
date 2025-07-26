// For loop

//Note ==> For Each loop koi bhi value return nhi krta hai
// eg--
// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) =>{
//     // console.log(item);
//     return item;
// })

// console.log(values);


//Now we Use "Filter" for return array values

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter( (xyz) =>{
    return xyz > 4;
})

// console.log(newNums);


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981,
   edition: '2004' },
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
   edition: '2008' },
    {title: 'Book Three', genre: 'History', publish: 1999,
   edition: '2007' },
    {title: 'Book four', genre: 'Science', publish: 2009,
   edition: '2014' },
    {title: 'Book five', genre: 'Fiction', publish: 1987,
   edition: '2005' },
    {title: 'Book six', genre: 'Fiction', publish: 1981,
   edition: '2004' },
    {title: 'Book seven', genre: 'History', publish: 2002,
   edition: '2024' }
];


let userBooks = books.filter( (bk) => bk.genre ==='History')
 
 userBooks = books.filter((bk)=> {
    return bk.publish >= 2000 && bk.genre === 'History'
}) 
console.log(userBooks);

