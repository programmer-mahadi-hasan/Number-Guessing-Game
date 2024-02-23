const minNUm = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNUm) + 1) + minNUm;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNUm} - ${maxNum}`);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert('please enter a valid number.');
    }
    else if (guess > maxNum || guess < minNUm) {
        window.alert('please enter a valid number.');
    }
    else{
        attempts++;
        if (guess < answer) {
            window.alert('Too low!! Try Again.');
        }
        else if (guess > answer) {
            window.alert('Too high!! Try Again.');
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false;
        }
    }
}