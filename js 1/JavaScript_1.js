
// 1 Разработать функцию, формирующую массив функций с информацией по своему юниту.
// []
// Входным параметром функция должна принимать количество юнитов в армии, выходные
// данные - массив функций, каждая из которых возвращает информацию по своему юниту.
// Информация возвращается в виде строки. Информация о юните хранится в объекте, со
// следующими полями:
// 1) n – порядковый номер юнита (начинается отсчет с 1),
// 2) hp – уровень «жизненной энергии» юнита,
// 3) armor - уровень защиты юнита,
// 4) attack - уровень атакующей силы юнита.
// Параметры 2-4 являются случайными величинами 1-100. Заполнение информации об юните
// происходит вне функции, возвращающей информацию по юниту. 

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function unit(quantity) {
    let units = [];

    for (let i = 0; i < quantity; i++) {
  
      let unit = {
        n: i + 1,
        hp: getRandom(1, 100),
        armor: getRandom(1, 100),
        attack: getRandom(1, 100),
      };
  
      units.push(function () {
        return `Номер юнита: ${unit.n}
        hp ${unit.hp} 
        armor ${unit.armor} 
        attack ${unit.attack}`;
      });
  
    }
    return units;
    
  }
  
quantity = prompt('Введите количество юнитов в армиии');

if ((!isNaN(quantity)) && (quantity > 0)){
    unit(quantity).forEach(el => {
        console.log(el());
    });
} else {
    console.log('Неверный ввод');
}



function ToDoList() {
    let answer = '';
    const tasksList = [];
    let i = 0;

    function createTask() {
        i += 1;

        let text = prompt("Введите текст задачи:")
        let task = {
            n: i,
            text: text,
            status: 'активная',
        };

        if (text.trim() !== ''){
            tasksList.push(task);
            answer = `Задача ${task.n} - ${task.text} добавлена`;
        } else{
            answer = 'Отсутсвует текст задачи. Задача не добавлена';
        }

        return answer;
        }

    function done(n = prompt('Введите номер задачи')) {
        let tasks = tasksList.find(task => task.n == n);
        if (!(tasks == undefined)) {
            tasks.status = 'завершенная';
            answer = `Задача ${tasks.n} - ${tasks.text} выполнена`;
        } else {
            answer = `Задача не найдена`;
        }
        return answer;
    }

    function deleted(n = prompt('Введите номер задачи')) {
        const index = tasksList.findIndex(task => task.n == n && task.status == 'завершенная');
        if (index !== -1) {
            tasksList[index].status = 'удаленная';
            answer = `Задача ${n} удалена`;
        } else {
            answer = `Задача ${n} не может быть удалена`;   
        }
        return answer;
    }

    function activeList() {
        return tasksList.filter(task => task.status == 'активная');
    }

    function doneList() {
        return tasksList.filter(task => task.status == 'завершенная');
    }

    function deletedList() {
        return tasksList.filter(task => task.status == 'удаленная');
    }

    function allTasks() {
        return tasksList;
    }

    return [
        createTask,
        done,
        deleted,
        activeList,
        doneList,
        deletedList,
        allTasks
    ];
}

let toDoList = ToDoList();
let code = 1;
while (code != 0) {
let index = prompt("Выберите действие:\n(1)- Добавить задачу \n(2)- Отметить задачу завершённой\n(3)- Удалить завершённую задачу\n(4)- Вывести список активных задач\n(5)- Вывести список завершённых задач\n(6)- Вывести список удалённых задач\n(7)- Вывести все задачи\n(0)- Завершить работу");

switch(index){
    case '1':
        console.log(toDoList[0]()); // Добавить задачу
        break;
    case '2':
        console.log(toDoList[1]()); // Отметить задачу завершённой
        break;
    case '3':
        console.log(toDoList[2]()); // Удалить завершенную задачу
        break;
    case '4':
        console.log("Активные задачи:");
        toDoList[3]().forEach(task => {
        console.log
        (`№${task.n} 
${task.text}
${task.status}`);
    });
        break;
    case '5':
        console.log("Завершенные задачи:");
        toDoList[4]().forEach(task => {
        console.log
        (`№${task.n} 
${task.text}
${task.status}`);
        }); 
        break;
    case '6':
        console.log("Удалённые задачи:");
        toDoList[5]().forEach(task => {
        console.log
        (`№${task.n} 
${task.text}
${task.status}`);
        }); 
        break;
    case '7':
        console.log("Все задачи:");
        toDoList[6]().forEach(task => {
        console.log
        (`№${task.n} 
${task.text}
${task.status}`);
        }); 
        break;
    case '0':
        console.log("Работа c программой завершена");
        code = 0;
        break;
    default:
        console.log("Неправильный ввод");
}
}

// Функция должна возвращать массив, в котором хранятся функции для работы с
// планировщиком задач. Каждая задача представляет собой объект со следующими полями:
// 1) n – номер задачи по порядку,
// 2) text – текст задачи,
// 3) status – статус задачи (активная, завершенная, удаленная)

// Функции todo list:
// 1) создание задачи (добавляет задачу в массив задач);
// 2) отметка о выполнении n-ой задачи;
// 3) отметка о удалении n-ой задачи (удалить можно только завершенную задачу, вывести
// сообщение о выполнении/причине не выполнения);
// 4) возвращение списка не выполненных (активных) задач;
// 5) возвращение списка завершенных задач;
// 6) возвращение списка удаленных задач;
// 7) возвращение списка всех задач.

// Все функции по задачам должны быть реализованы таким образом, что позволяют получить
// входные данные, или вывести результат работы функции, через интерфейс взаимодействия с
// пользователем (prompt, alert) либо через консоль браузера.


 
