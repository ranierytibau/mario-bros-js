'use strict'

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const bullet = document.querySelector('.bullet');
const span = document.querySelector('.lives');
const GAME_OVER = document.querySelector('.game-over');

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};


const loop = setInterval(() => {

    //const pipePosition = pipe.offsetLeft;
    //const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
    //const pipePosition = window.getComputedStyle(pipe).left.replace('px', '');

    const pipePosition = parseInt(window.getComputedStyle(pipe).left);
    const marioPosition = parseInt(window.getComputedStyle(mario).bottom);
    const bulletPosition = parseInt(window.getComputedStyle(bullet).left);

    if (pipePosition <= 55 && pipePosition > 0 && marioPosition < 55) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imgs/lose.png';
        mario.style.width = '3.1rem';
        mario.style.marginLeft = '1.2rem';

        span.innerText = '0';

        GAME_OVER.classList.remove('game-over');

        clearInterval(loop);
    }

    if (bulletPosition <= 55 && bulletPosition > 0 && marioPosition > 65) {

        bullet.style.animation = 'none';
        bullet.style.left = `${bulletPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${bulletPosition}px`;

        mario.src = './imgs/lose.png';
        mario.style.width = '3.1rem';
        mario.style.marginLeft = '0.9rem';

        span.innerText = '0';

        GAME_OVER.classList.remove('game-over');

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);

