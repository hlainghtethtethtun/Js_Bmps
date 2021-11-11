'use strict';
let scores , currentScore , activePlayer , playing;
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score1El = document.getElementById('score--0');
const score2El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


diceEl.classList.add('hidden');

const init = function(){
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true ;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    player0El.classList.add('player--active');
    // diceEl.classList.add('hidden');

    score1El.textContent = 0;
    score2El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
}
init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function(){
    if(playing){
    //1.Generating a Random Dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2.Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3.Check For Roll
    if(dice !== 1){
        //add dice to current score
        currentScore += dice;
        // current0El.textContent = currentScore;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else{
        //switch to next player
        switchPlayer();
    };
}
});

btnHold.addEventListener('click',function(){
    if(playing) {
    scores[activePlayer] += currentScore ;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 20){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.getElementById(`current--${activePlayer}`).textContent = 'Win';
        diceEl.classList.add('hidden');

    }else{
        switchPlayer();
    }
}
});

btnNew.addEventListener('click',init);