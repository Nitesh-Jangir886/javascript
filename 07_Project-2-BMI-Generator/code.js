const form = document.querySelector('form');

form.addEventListener( 'submit', function (e){
    e.preventDefault(); // Jab form sumbit krte hai to ye neccesary hai

   const height = parseInt(document.querySelector('#height').value) // we use  .value for  taking inputs
   const weight = parseInt(document.querySelector('#weight').value)
   const result = document.querySelector('#result')

   if(height === '' || height<0 || isNaN(height)){
    result.innerHTML = `Please give a valid heigth ${height}`
   }
    else if(weight === '' || weight<0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`
   }
   else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); //it is a formula and .toFixed means kiti decimal value deni hai
    //Show the result
    // result.innerHTML = `<span> BMI is : ${bmi}</span>`;
   
    if(bmi < 18.6){
    result.innerHTML = `<span> ${bmi} , BMI is under Weight </span>`;
    }
    else if(bmi >= 18.6 && bmi<=24.9){
        result.innerHTML = `<span> ${bmi}, BMI is in Normal Range </span>`;
        }
        else{
        result.innerHTML = `<span> ${bmi}, BMI is Overweight </span>`;
        }

   }

} );