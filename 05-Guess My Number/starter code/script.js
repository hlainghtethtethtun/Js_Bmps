'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 13;
// console.log(document.querySelector('.guess').value);
let secrectNumber = Math.trunc(Math.random() * 20) + 1 ;
let score = 20;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    // document.querySelector('.number').textContent = secrectNumber;
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //When there is no input
    if(!guess){
        displayMessage('No number Please Enter Number');
    } //When Player Win
    else if(guess === secrectNumber){
        displayMessage('Correct Number');
        document.querySelector('.number').textContent = secrectNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        };
    } //When Guess is unequal(too high or too low)
    else if( guess !== secrectNumber){
        if(score > 0){
            displayMessage(guess > secrectNumber ? 'Too High' : 'Too Low'); 
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.score').textContent = 0;
            displayMessage('Loose The Game');
        };
    }
});

document.querySelector('.again').addEventListener('click',function(){
    // location.reload();
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    document.querySelector('.score').textContent = score;

    secrectNumber = Math.trunc(Math.random() * 20) + 1 ;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';

    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
});
