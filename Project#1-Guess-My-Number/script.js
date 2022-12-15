'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉Correct Answer';

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

let secretNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const checkInp = function () {
    if (!score) {
        document.querySelector('.message').textContent = '❌ You Lose !!!';
        return;
    }

    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No Guesses...';
        score--;
    }
    else if (guess === secretNum) {
        document.querySelector('.message').textContent = '🎉 Correct Guess...';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '35rem';
        document.querySelector('.number').textContent = secretNum;
        if (score > highscore) highscore = score;
    }
    else if (guess > secretNum) {
        document.querySelector('.message').textContent = '🙄 Too High...';
        score--;
    }
    else {
        document.querySelector('.message').textContent = '🙄 Too Low...';
        score--;
    }
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;
}

document.querySelector('.check').addEventListener('click', checkInp);

// --------------------- Coding Challenge #10 Solution Below ------------------

const resetGame = function () {
    score = 20;
    secretNum = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
}

document.querySelector('.again').addEventListener('click', resetGame);