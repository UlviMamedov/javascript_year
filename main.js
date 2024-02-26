let money = 1000;

function playRoulette() {
    let bet = parseInt(prompt(`Ваш баланс: ${money}$\nВведіть вашу ставку:`), 10);

    if (isNaN(bet) || bet <= 0 || bet > money) {
        console.log('Введення некоректне. Спробуйте ще раз.');
        playRoulette();
        return;
    }

    let color = prompt('Виберіть колір (чорний/червоний):').toLowerCase();
    let outcome = Math.random() < 0.5 ? 'чорний' : 'червоний';

    alert(`Вигаданий колір: ${outcome}`);

    if (color === outcome) {
        money += bet;
        alert(`Ви виграли! Ваш баланс: ${money}$\n`);
    } else {
        money -= bet;
        alert(`Ви програли. Ваш баланс: ${money}$\n`);

        if (money <= 0) {
            alert('Ви витратили всі гроші. Гра завершена.');
        } else {
            let continuePlaying = confirm('Хочете продовжити гру?');
            if (continuePlaying) {
                playRoulette();
            } else {
                alert('Гра завершена.');
            }
        }
    }

    if (money > 0) {
        alert(`Ваш баланс після гри: ${money}$`);
        alert(`Гра завершена. ${money > 1000 ? 'Ви виграли!' : 'Ви не виграли.'}`);
    }
}

playRoulette();