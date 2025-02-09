let min = 1;
let max = 100;
let secretNumber = Math.floor(Math.random() * max) + min;

while (min <= max) {
    let guessNumber = Math.floor((min + max) / 2);
    console.log(`Компьютер 2: Пробую число ${guessNumber}.`);
    
    if (guessNumber === secretNumber) {
        console.log(`Компьютер 1: Угадал!`);
        break;
    } else if (guessNumber > secretNumber) {
        console.log("Компьютер 1: Меньше.");
        max = guessNumber - 1;
    } else {
        console.log("Компьютер 1: Больше.");
        min = guessNumber + 1;
    }
}
