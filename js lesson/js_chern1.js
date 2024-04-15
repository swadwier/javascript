// 2 Разработать функцию, возвращающую массив с функционалом планировщика
// задач (ToDо list).
// function toDoList(){

//     tasksList = [];
//     i = 0;
//     function createtask(text, stat="активная"){
//         i += 1;
//         let task =
//         {
//         n: i,
//         text: '',
//         stat: '',
//         };

//     tasksList.push(task);
//     }
    

//     function done(){
//         num = prompt("Введите номер завершённой задачи");
//         if (task.n == num){
//             task.stat = 'завершённая';
//         }
        
//     function deleted(){
//         num = prompt("Введите номер завершённой задачи, которую хотите удалить");
//         textx = prompt("Выполнена/Не выполнена (почему не выполнена)")
//         if ((task.n == num) && (task.stat = 'завершённая')){
//             task.stat = 'удалённая';
//         }
//         console.log(textx);
//     }

//     function active() {
//         return tasksList.filter(el => el.stat === 'активная');
//     }

//     function doneList() {
//         return tasksList.filter(el => el.stat === 'завершённая');
//     }

//     function deletedList(){
//         return tasksList.filter(el => el.stat === 'удалённая');
//     }

//     function allTasks(){
//         return tasksList;
//     }

//     }

//     toDoList.forEach(el => {
//         console.log(el());
//     });
// }


// function ToDoList() {

//     let tasksList = [];
//     let i = 0;

//     function createTask(text, stat="активная") {
//         i += 1;
//         let task = {
//             n: i,
//             text: text,
//             stat: stat,
//         };
//         tasksList.push(task);
//     }

//     function done() {
//         let num = prompt("Введите номер завершённой задачи");
//         tasksList.forEach(task => {
//             if (task.n == num) {
//                 task.stat = 'завершённая';
//             }
//         });
//     }

//     function deleted() {
//         let num = prompt("Введите номер завершённой задачи, которую хотите удалить");
//         let textx = prompt("Выполнена/Не выполнена (почему не выполнена)");
//         tasksList.forEach(task => {
//             if (task.n == num && task.stat === 'завершённая') {
//                 task.stat = 'удалённая';
//             }
//         });
//         console.log(textx);
//     }

//     function active() {
//         return tasksList.filter(el => el.stat === 'активная');
//     }

//     function doneList() {
//         return tasksList.filter(el => el.stat === 'завершённая');
//     }

//     function deletedList() {
//         return tasksList.filter(el => el.stat === 'удалённая');
//     }

//     function allTasks() {
//         return tasksList;
//     }

//     return {
//         createTask,
//         done,
//         deleted,
//         active,
//         doneList,
//         deletedList,
//         allTasks
//     };
// }

// let toDoList = ToDoList();
// toDoList.createTask('Сделать уроки');
// toDoList.createTask('Почистить комнату');
// console.log(toDoList.allTasks());
// toDoList.done();
// console.log(toDoList.allTasks());
