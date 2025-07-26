 // Immediately Invoked Function Expression (IIFE)

  //syntX --> ()();---->(isme function declare kro)(Ye function ko call laga dega)
 (function chai (){
    //named IIFE --> b/c function ka name given hai
    console.log(`Conected`);
 })(); //Yah ye semicolon(;) jaruri hai varna IIFE ko nhi pta hota ki kaha rukna hai 



( () => {
    //unamed IIFE --> B/C function ka name given nhi hai
    console.log(`Connected two`); 
})();

//Argument and Parameter kese denge ??

( (name) => {
    console.log(`Connected two ${name}`); 
})("NITESH");