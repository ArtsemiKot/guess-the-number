// Программа генерирует случайное число в диапазоне от 1 до 100 и просит пользователя угадать это число. 
// Если догадка пользователя больше случайного числа, то программа должна вывести сообщение 
// 'Слишком много, попробуйте еще раз'. Если догадка меньше случайного числа, то программа должна вывести сообщение 
// 'Слишком мало, попробуйте еще раз'. Если пользователь угадывает число, то программа должна поздравить 
// его и вывести сообщение 'Вы угадали, поздравляем!'.

class SearchBinary {
    dosearchBinary(n) {
        alert('Добро пожаловать в игру угадай число');
        alert('Угадай число от 1 до 100');
        let count = 0;
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
                break;
            } else if (average > n) {
                end = average;
                alert(`Вы ввели число ${average}. Попробуйте число меньше. Введите число от ${start} до ${end}`);
            } else if (average < n) {
                start = average;
                alert(`Вы ввели число ${average}. Попробуйте число больше. Введите число от ${start} до ${end}`);
            }
        }
    }
}
const n = Math.floor(Math.random() * 100);
const searchBinary = new SearchBinary();
const result = searchBinary.dosearchBinary(n);
console.log(result);