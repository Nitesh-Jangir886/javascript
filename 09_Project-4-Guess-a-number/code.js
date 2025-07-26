let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame  = true  //Iske bina game start nhi hoga

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    });
}



function validateGuess(guess){
    if(isNaN(guess)){ // isNaN() check kr deta hai ki given value number hai ki nhi
alert('Please Enter a valid Number')
}
else if(guess < 1){
alert('Please Enter a valid Number')
}
else if(guess > 100){
alert('Please Enter a valid Number')
}
else{
    prevGuess.push(guess);
   //check kro kahi ye Player ka last attemp yo nhi tha kahi uska game over to nhi ho gya hai
    if(numGuess === 11){
    displayGuess(guess)
    displayMessage(`Game Over. Random number was ${randomNumber}`)
    endgame()
    }else{ // agar usko game over na hua ho to
        displayGuess(guess)
        checkGuess(guess) //check kro ki uska guess correct hai ki nhi
    }
   }
  }

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endgame();
  } 
  else if(guess < randomNumber){
    displayMessage(`Number is Too low`)
  }
  else if(guess > randomNumber){
    displayMessage(`Number is Too High`)
  }
}

function displayGuess(guess){
  userInput.value = '' //input value updated 
   guessSlot.innerHTML += `${guess}  ` //isme space dena last m taki previous value or current value mix na ho
   numGuess++;
   remaining.innerHTML = `${11 - numGuess}`

}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
   userInput.value = '' //sari value clean kr do
   userInput.setAttribute('disabled', '') //taki ab aage koi or value na daal sake
   p.classList.add('button')
   p.innerHTML = `<h2 id ="newGame"> Start new Game </h2>`
   startOver.appendChild(p);
   playGame = false;
   newgame();
}

function newgame(){
     const newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click', function(e){
    randomNumber= parseInt(Math.random() * 100 + 1);
   prevGuess = [];
   numGuess = 1;
   guessSlot.innerHTML = '';
   remaining.innerHTML = `${11 - numGuess} `;
   userInput.removeAttribute('disabled');
   startOver.removeChild(p);

   playGame = true;
   })
}
