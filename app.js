alert('Добро пожаловать в игру угадай число')

const n = Math.floor(Math.random() * 100);

let count = 0;
function searchBinary(n) {
    let start = 0;
    let end = 100;
    for (let i = start; i <= end; i++) {
        let average = Math.floor(prompt('Введите целое число'));
        count++;
        if (average == 0 || average > 101 || isNaN(average)) {
            alert('Введите число и число должно быть больше 0 и меньше 101')
            break;
        }
        if (n == average) {
            alert(`Вы угадали число!`);
            alert(`Попыток ${count}`)
            break
        } else if (average > n) {
            end = average
            alert(`Попробуйте число меньше. Введите число от ${start} до ${end}`);
        } else if (average < n) {
            start = average
            alert(`Попробуйте число больше. Введите число от ${start} до ${end}`);
        }
    }
}

let result = searchBinary(n);
console.log(result)