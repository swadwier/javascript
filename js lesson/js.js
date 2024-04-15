//  let a =8, b ="10";
// const b;
// объявление переменных

// вывод на экран 

// undefined - перемен. не определена
// null
// String
// Number
// NaN - неправильная математическая операция
// Infinity
// примитивные типы

// String
// Array 

// + - / * % ** Math.
//мат операции

// console.log(a.toString());
// console.log(a / "a ");
// console.log(a / 0);
// `  ` - многострочный текст в апострофах
// ` ${a}` - использование переменных внутри строки, внутри апострофов


// a = 5 + '10' // a = 510
// a = Number(b);// преобразование типов 
// a = parseInt(b);

// console.log(String(1));
// console.log(String(0));
// console.log(String(null));
// console.log(String(undefined));
// console.log(String(1 / "a"));
// console.log(String(1 / 0));
// console.log(String(''));
// console.log(String('0'));
// console.log(String([])); //массив
// console.log(String({})); // объект

// const mas1 = Array(10);
// const mas2 = [3, 4, 5, 6 ,44,4];
// mas1[2] = 3;
// mas1.length = 7;
// mas1[0] = mas2;
// mas2[10] = "a";
// mas2.push(null);
// mas2.unshift(1);
// const el = mas2.pop();
// const el_first = mas2.shift();


// let $val = -5, $result;


// if ($val > 10){
//     $result = 7;
// } else {
//     $result = 5;
// }

// $result = $val > 10 
//     ? 7 
//     : 5;

// if (($val == null) || ($val == undefined)){
//     $val = "1";
// }

// $val = ($val == null) || ($val == undefined) 
//     ? "1" 
//     : $val;

// $val = (typeof $val == "null") || (typeof $val == "undefined") 
// ? "1" 
// : $val;

// $val = $val ?? "1";
// $val ??= "1";


// let mas = [1,2,3,4,5]

// for (let i = 0; ; ){
//     if (i < mas.length){
//     console.log(mas[i]);
//     i++;  
//     } else{
//         break;
//     }
// }

// for (let i = 0; ; ){
//     if (i > mas.length-1) {
//         break;
//     }

//     console.log(mas[i]);
//     i++;  
// }

// for (let i = 0; ; ){
//     if (i === mas.length) {
//         break;
//     }

//     console.log(mas[i]);
//     i++;  
// }
// let i = 0
// for (; ; ){
//     if (i > mas.length-1) {
//         break;
//     }

//     console.log(mas[i]);
//     i++;  
// }

// let i = 0
// while(i < mas.length) {
//     if(mas[i] == 5){
//         i++;
//         continue;
//     }

//     if(!(i % 2)){
//         console.log(mas[i]);
//     }
//     i++;
// }

// let i = 0
// let mas = [1,2,3,4,5]

// function defenition

// function hello(userName = 'user'){
//     console.log(`hello ${userName}`);
// };

// function hello(userName){
//     userName ??= 'user';
//     console.log(`hello ${userName}`);
// };

// hello(prompt("What is your name?"));

// function sum(...value) {
//     // console.log(value);
//     return value.reduce((res,el)=>res+el,0);
// }

// console.log(sum(1,2,34,6,7,8,6));

// фигурные скобки - это контекст
// let y   - undefined
// 1 + undefined = NaN

// let y = 1;

// function sum(x){
//     let y = 0;
//     function f1(){
//         return x+y;
//     }
//     return f1();
// }
// console.log(sum(1,2));
// y+=5;
// console.log(sum(2,2));

// контекст -лексическое окружение, представляет собой большой большой объект 
// window - глобальный объект в браузере, всё, что окружает наш код в браузере

// let i = 0;
// {
//     var b = 1;
//     i++;
//     console.log(i);
// }
// console.log(b);

// function sum(){
//     let count = 0;
//     return function(x,y){
//         console.log(x + y);
//         return `function call count ${++count}`
//     };
// }

// let f1 = sum();
// let f2 = sum();
// let f3 = sum();
// console.log(f1(2,2));
// console.log(f2(3,2));
// console.log(f2(3,2));
// console.log(f3(3,2));

// function counter(){
//     let value = 0;
//     const inc = () => ++value;
//     const dec = () => --value;
//     const get = () => value;
//     const set = (val = 1) => value = val;
//     const reset = () => value = 0;

//     return [inc, dec, get, set, reset];
// }

// const box = counter();
// console.log(`inc: ${box[0]()}`)//inc
// console.log(`inc: ${box[0]()}`)//inc
// console.log(`get: ${box[2]()}`)//get
// console.log(`dec: ${box[1]()}`)//dec
// console.log(`get: ${box[2]()}`)//get
// console.log(`reset: ${box[4]()}`)//reset
// console.log(`get: ${box[2]()}`)//get
// console.log(`set: ${box[3](5)}`)//set
// console.log(`get: ${box[2]()}`)//get

// for(let i = 0; i<5; i++){
// }
// console.log(i);

// const mas = [1,2,3,4,5]
// mas.forEach(function (el, index){
//     console.log(`mas[${index}] = ${el}`);
// })

// const massiv =[1,2,3];
// const massiv2 = [1,2,3];
// const massiv3 = [...massiv, ...massiv2];
// console.log(massiv3)

//с индексом 0 - array, function
//с индексом 1 - объекты - попозже

//создание объект
// const obj1 = new Object();
// const obj2 = {};
// console.log(obj1, obj2);

// const user = {
//     name : "Vasya",
//     'USER AGE' : 12,
//     login : "vasssya",

    // getUserInfo: function(){
    //     Object
    //     .keys(this)
    //     .forEach(key => {
    //        if (typeof this[key] != "function"){
    //         console.log(`${key} => ${this[key]}`)
    //        }
    //     })
    // }

//     getUserInfo: function(){
//         Object
//         .keys(this)
//         .filter(key => typeof this[key] != "function")
//         .forEach(key => {
//             console.log(`${key} => ${this[key]}`)
//         })
//     }

// };
// user.getUserInfo();
// user.email = "vasya@mail.ru";
// let field = "USER AGE"

// console.log(user[field], user.name, user.email);

// for(let key in user){
//     console.log(`${key} => ${user[key]}`)  //интерполяция
// }
// console.log(Object.entries(user));

// Object
// .entries(user)
// .forEach(el => 
//     console.log (`${el[0]} => ${el[1]}`)    
// )
// console.log(Object.keys(user))

// Object
// .keys(user)
// .forEach(key => 
//     console.log (`${key} => ${user[key]}`)    
// )

//атрибуты\ свойства объекта и перебор

//МЕТОДЫ ОБЪЕКТОВ

// const counter = {
//     value: 0,
//     inc() { this.value++ },
//     dec() { this.value-- },
//     get() {console.log(this.value) },
//     set(val) {this.value = val },
//     reset() {this.value = 0},
// }

// console.log(counter.inc());
// console.log(counter.inc());
// console.log(counter.inc());
// console.log(counter.inc());
// console.log(counter.set(8));
// // console.log(counter.dec());
// console.log(counter.get());
// // console.log(counter.dec());

// const counter2 = counter;
// console.log(counter2.inc());
// console.log(counter2.inc());
// console.log(counter2.inc());
// console.log(counter.get());
// console.log(counter2.set(19));
// console.log(counter.get());
// // console.log(counter.dec());


//КЛАССЫ
// class Animal{
//     typeAnimal = '';
//     constructor(val){
//         this.typeAnimal = val;
//         console.log("Animal");
//     }
// } 

// class Pet extends Animal
// {
//     static count = 0;
//     #props = {
//     nickName : '',
//     age : 0,
//     type : '',
//     color : '',
//     weight : '',
//     }
   
//     // get count(){
//     //     return this.count;
//     // }

//     constructor(data){
//         super('a')
//         console.log(super.typeAnimal)
//         for(let [key, val] of Object.entries(data)){
//             if(key in this.#props){
//                 this.#props[key] = val; 
//             }
//         }
//         Pet.count++;
//     }
    
//     // setNickName(value) {
//     //     this.nickName = value;
//     //     return this.nickName;
//     // }

//     setNickName(value) {
//         this.#props.nickName = value;
//         return this.getNickName();
//     }
    
//     getNickName(params) {
//         return this.#props.nickName;
//     }

//     set age(value = 0) {
//         if (isNaN(value)  || value===0 || value > 20 || value < 0){
//             console.log("Необходимо установить корректный возраст")
//         }else {
//             this.#props.age = value; 
//         }
//         // return this.age;
//     }

//     get age(){
//         return this.#props.age;
//     }

//     getPetInfo(){
//         for (let [key, val] of Object.entries(this.#props)){   //деструктуризация
//              console.log(`${key} => ${val}`)
//         }
//        return true;
//     }

//     getPetInfo2(){
//         console.log('-------------------------------')
//        Object.entries(this.#props).forEach(el => {   
//              console.log(`${el[0]} => ${el[1]}`)
//         });

//        return true;
//     }
//     // getPetInfo2(){
//     //     console.log('-------------------------------')
//     //     Object
//     //     .entries(this.#props)
//     //     .forEach((el, index) => {   
//     //     console.log(`--${this.#props}--`)
//     //     });

//     //    return () => this.#props;
//     // }


// }

// const cat = new Pet(
// {
// nickName:"bebebe", 
// age: 2, 
// type: "British", 
// color: "Black", 
// weight : 5,
// login : "bnm"
// }
// );

// const dog = new Pet(
//     {
//     nickName:"bababa", 
//     age: 3, 
//     type: "British", 
//     color: "Black", 
//     weight : 5
//     }
//     );
// cat.setNickName("Мурзя");
// console.log(Pet, cat.getPetInfo(), dog.getPetInfo2(), cat.count, dog.count);
// console.log(Pet.count);


//ПЛАНИРОВАНИЕ СОБЫТИЙ
console.log(Date.now());


// const res = setInterval(() => {
//     date = new Date();
//     console.log
//     (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds(): date.getSeconds()}`);
// }, 1000);

// clearInterval(res); //остановить таймер
// date.getDate(), date.getMonth() + 1, date.getFullYear(), 

let res = setTimeout(function timer() {
    date = new Date();
    console.log
    (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds(): date.getSeconds()}`);
    res = setTimeout(timer,1000)
}, 1000);







