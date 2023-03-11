let userInput = document.getElementById('userInput');
let check = document.getElementById('check');
let result = document.getElementById('result');

let luckyNumber = Math.ceil(Math.random()*100);
console.log(luckyNumber);

function guessGame(){
    let userValue = parseInt(userInput.value)

    if (userValue > luckyNumber){
        result.textContent = 'Too High! Try Again.';
        result.style.backgroundColor = '#1e217c';
    }else if (userValue < luckyNumber){
        result.textContent = 'Too Low! Try Again.';
        result.style.backgroundColor = '#1e217c';
    }else if (userValue === luckyNumber) {
        result.textContent = 'Congratulations! You got it right.';
        result.style.backgroundColor = 'green';
    }else{
        result.textContent = 'Please provide a valid input.';
        result.style.backgroundColor = '#1e217c';
    }
}


check.addEventListener('click',guessGame);