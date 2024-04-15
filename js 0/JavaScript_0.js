//1 task
// 1 Создайте функцию, которая принимает строку на русском языке, а
// возвращает ее транслит.


function translit(str){
    let answer = '';
    const RuAlphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н','о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
    const EngTranslit = ['a', 'b', 'v', 'g', 'd', 'e', 'yo', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'kh', 'ts', 'ch', 'sh', 'shch', '"', 'y', "'", 'e', 'yu', 'ya'];

    if (!str){
        answer = "Строка пустая, попробуйте ещё раз"
    } else{
        for (let i of str){
        if (RuAlphabet.includes(i)){
            answer += EngTranslit[RuAlphabet.indexOf(i)];
        } else if (RuAlphabet.includes(i.toLowerCase())){
            answer +=  EngTranslit[RuAlphabet.indexOf(i.toLowerCase())][0].toUpperCase()+EngTranslit[RuAlphabet.indexOf(i.toLowerCase())].slice(1);
        } else{
            answer += i;
        }
    }
    }

    return answer;
}
// string_input = prompt("Введите строку");
// console.log(translit(string_input));


// 2 Создайте функцию, которая возвращает множественное или единственное число существительного. 
//Пример: 1 яблоко, 2 (3, 4) яблока, 5 яблок.
// Функция первым параметром принимает число, а следующие 3 параметра — форма для единственного числа,
//для чисел два, три, четыре 
//и для чисел, больших четырех, например, func(3, 'яблоко', 'яблока', 'яблок').

function formReturn(num, firstForm, secondForm, thirdForm){
    let answer = '';
    let start_num = num;

    if (!(/^[a-zA-Zа-яА-Я]+$/.test(firstForm)) || !(/^[a-zA-Zа-яА-Я]+$/.test(secondForm)) || !(/^[a-zA-Zа-яА-Я]+$/.test(thirdForm))){
        answer = `Некорректная форма`;
        return answer;
    }

    if (isNaN(num) || !Number.isInteger(parseFloat(num)) || (parseInt(num) < 0) || num.includes('-') || num.includes('+')){
        answer = `${num} - Некорректный ввод`;
        return answer;
    }

    if (num == 100 || num > 100){
        num = num.slice(-2);
        // console.log(typeof(num));
    }
    
    if (num > 9 && num < 21){  //10;20
        answer = `${start_num} ${thirdForm}`;
    }

    if (num > 20 && num < 100){
        num = num[1];
    }

    switch(parseInt(num)){
        case 1: 
            answer = `${start_num} ${firstForm}`;
            break;
        case 2:
        case 3:
        case 4:
            answer = `${start_num} ${secondForm}`;
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
            answer = `${start_num} ${thirdForm}`;
            break;
    }
    return answer;
} 
// num_input = prompt("Введите количество объектов");
// first_fm = prompt('Введите первую форму - например "яблоко" => "1 яблоко"');
// second_fm = prompt('Введите вторую форму - например "яблока" => "2 яблока"');
// third_fm = prompt('Введите третью форму - например "яблок" => "5 яблок"');
// console.log(formReturn(num_input, first_fm, second_fm, third_fm));



// 3 Создайте функцию, для поиска счастливых билетов. Счастливый билет - это билет, в котором сумма первых трех цифр его номера равна сумме вторых трех цифр его номера. В случае если пользователь вводит номер количества знаков ведущими Ø.

function happyTicket(ticket_number){
    let answer = "";
    let startHappyTicket = ticket_number;
    let firstPart ='';
    let secondPart = '';

    if (isNaN(ticket_number) || !Number.isInteger(parseFloat(ticket_number))|| (parseInt(ticket_number) < 0) || ticket_number.includes('-') || ticket_number.includes('+')){
        answer = `${ticket_number} - некорректный ввод`;
        return answer;
    }

    if (ticket_number.length  < 6){
       while (ticket_number.length < 6){
            ticket_number = '0' + ticket_number;
        }
    }

    firstPart = parseInt(ticket_number[0])+parseInt(ticket_number[1])+parseInt(ticket_number[2]);
    secondPart = parseInt(ticket_number[3])+parseInt(ticket_number[4])+parseInt(ticket_number[5]);

    if (firstPart == secondPart){
        answer = `Билет №${startHappyTicket} - счастливый!`;
    } else{
        answer = `К сожалению, билет №${startHappyTicket} - не счастливый`;
    }
    
    return answer;

}
// ticket_number_input = prompt("Введите номер билета");
// console.log(happyTicket(ticket_number_input));


function divider(number){
    let array_of_dividers = [];
    
    for (let i = 1; i < number ; i++){
        if (number%i == 0){
            array_of_dividers.push(i);
        }
    }
    return array_of_dividers;
}

function sumOfArray(array){
    let sum = 0;
    sum = array.reduce((res,el)=>res + el, 0);

    return sum;
}

let answer = [];
for (let k = 1; k < 10001; k++){
    let j = sumOfArray(divider(k));
    if (sumOfArray(divider(k)) == j && sumOfArray(divider(j)) == k && k<j){
        answer.push([k, j]);
    }
    }    

// console.log(answer);


// 4 Дружественные числа - два различных числа, для которых сумма всех собственных делителей первого числа равна второму числу и наоборот, cумма всех собственных делителей второго числа равна первому числу. 
// Например, 220 и 284 Делители для 220 это 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 и 110, сумма делителей равна 284 Делители для 284 это 1, 2, 4, 71 и 142, их сумма равна 220

// Задача: найдите все пары дружественных чисел в промежутке от 1 до 10000. Для этого сделайте вспомогательную функцию, которая находит все делители числа и возвращает их в виде массива.
//Также сделайте функцию, которая параметром принимает массив, а возвращает его сумму.

// Примечание: задачи 1-3 данные от пользователя принять через модальное окно браузера. Результат работы всех функций вывести в консоль.

