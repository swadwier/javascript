
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
        return `
        number ${unit.n}
        hp ${unit.hp} 
        armor ${unit.armor} 
        attack ${unit.attack}`;
      });
  
    }
    return units;
    
  }
  
  unit(5).forEach(el => {
    console.log(el());
    
  });

/*
function ToDoList() {

    let tasksList = [];
    let i = 0;

    function createTask() {
        i += 1;
        let text = prompt("Введите текст задачи:");
        let stat = "активная";

        let task = {
            n: i,
            text: text,
            stat: stat,
        };
        tasksList.push(task);
        console.log(`Задача "${task.text}" добавлена`);
    }

    function done() {
        let num = prompt("Введите номер завершённой задачи");
        tasksList.forEach(task => {
            if (task.n == num) {
                task.stat = 'завершённая';
                console.log(`Задача "${task.text}" успешно завершена`);
            }
        });
    }

    function deleted() {
        let num = prompt("Введите номер задачи, которую хотите удалить");
        let reason = prompt("Причина удаления");
        tasksList.forEach((task, i) => {
            if (task.n == num) {
                task.stat = 'удаленная';
                tasksList.splice(i, 1);
                console.log(`Задача "${task.text}" успешно удалена`);
                if (reason) {
                    console.log(`Причина удаления: ${reason}`);
                }
            }
        });
    }

    function activeList() {
        console.log("Активные задачи:");
        tasksList.forEach(task => {
            if (task.stat === 'активная') {
                console.log(`Задача №${task.n} - ${task.text}, ${task.stat}`);
            }
        });
    }

    function doneList() {
        console.log("Завершенные задачи:");
        tasksList.forEach(task => {
            if (task.stat === 'завершённая') {
                console.log(`Задача №${task.n} - ${task.text}, ${task.stat}`);
            }
        });
    }

    function deletedList() {
        console.log("Удалённые задачи:");
        tasksList.forEach(task => {
            if (task.stat === 'удаленная') {
                console.log(`Задача №${task.n} - ${task.text}, ${task.stat}`);
            }
        });
    }

    function allTasks() {
        console.log("Все задачи:");
        tasksList.forEach(task => (console.log
            (`Задача №${task.n} - ${task.text}, ${task.stat}`)));
        // console.log(tasksList);
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
        toDoList[0](); // Добавить задачу
        break;
    case '2':
        toDoList[1](); // Отметить задачу завершённой
        break;
    case '3':
        toDoList[2](); // Удалить завершенную задачу
        break;
    case '4':
        toDoList[3](); // Вывести список активных задач
        break;
    case '5':
        toDoList[4](); // Вывести список завершенных задач
        break;
    case '6':
        toDoList[5](); // Вывести все задачи
        break;
    case '7':
        toDoList[6]();
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
*/

 
