// // 1) Реализовать симуляцию движения поезда.
// // Поезд двигается по маршруту от города N до города M. 

// // Санкт-Петербург - Саранск
// // На пути 4 крупные остановки (количество, длительность, длительность между):
// // В время остановок поезда происходит смена локомотива, поэтому следующий участок поезд может проехать в
// // любом из 3-х вариантов: 
// // с опозданием, с увеличенным скоростным режимом, либо по расписанию.

// -.Санкт-Петербург (Московский вокзал) 17:00 первая метка - поезд отправился в 17:14:35
// 5 ч 4мин (по расписанию) 6080 мс
// 1.Редкино* 22:03 34 мин 22:37  680 мс
// 1 час 47 минут (по расписанию) 2140 мс
// 2.Лихоборы (техническая)* 00:24 35 мин 00:59 700 мс
// 15 минут (по расписанию) 300 мс
// 3.Москва (Восточный вокзал) 01:14 12 мин 01:26 240 мс
// 5 часов 26 минут (по расписанию) 6 520 мс
// 4.Арзамас-1 06:52 26 мин 07:18 520 мс
// 2 часа 50 минут (по расписанию) 3400 мс
// -.Саранск-1 10:08 30 мин 10:38

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const stops = [
    "Санкт-Петербург",
    "Редкино",
    "Лихоборы",
    "Москва",
    "Арзамас-1",
    "Саранск-1",
    ];
    
    const timeOuterInterval = [
    0,
    6060,
    680 + 2140,
    700 + 300,
    240 + 6520,
    520 + 3400,
    ];
    
    const realInterval = [
    0,
    getRandomInt(5960, 6160),
    getRandomInt(2720, 2920),
    getRandomInt(900, 1100),
    getRandomInt(6660, 6860),
    getRandomInt(3820, 4020),
    ];
    
    let realDate = new Date(2024, 3, 15, 17, 0, 0);
    let date = new Date(2024, 3, 15, 17, 0, 0);
    
    const MINUTE = 20;
    const REAL_MINUTE = 1000 * 60;
    
    function way(i = 0) {
    if (i < stops.length) {
    setTimeout(() => {
    let tempDate;
    const realAddition = (realInterval[i] / MINUTE) * REAL_MINUTE;
    tempDate = +realDate + realAddition;
    realDate = new Date(tempDate);
    
    const addition = (timeOuterInterval[i] / MINUTE) * REAL_MINUTE;
    tempDate = +date + addition;
    date = new Date(tempDate);
    
    const realTime = realDate.getTime();
    const time = date.getTime();
    
    if (realTime > time + REAL_MINUTE) {
    console.log(
    `Поезд прибыл в ${stops[i]}`,
    `(${realDate.toLocaleTimeString("it-IT")})`,
    `с опозданием`
    );
    } else if (realTime < time - REAL_MINUTE) {
    console.log(
    `Поезд прибыл в ${stops[i]}`,
    `(${realDate.toLocaleTimeString("it-IT")})`,
    `раньше по расписанию`
    );
    } else {
    console.log(
    `Поезд прибыл в ${stops[i]}`,
    `(${realDate.toLocaleTimeString("it-IT")})`,
    `по расписанию`
    );
    }
    
    way(i + 1);
    }, realInterval[i]);
    }
    }
    
    way();
    // Временной масштаб симуляции: 1200мс:1ч.
    // 20мс:1м




// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let stops = ["Санкт-Петербург", "Редкино", "Лихоборы", "Москва", "Арзамас-1", "Саранск-1"];
// let timeOuterInterval = [
//     new Date(2024, 3, 15, 17, 0, 0),  // Санкт-Петербург
//     new Date(2024, 3, 15, 22, 3, 0),   // Редкино
//     new Date(2024, 3, 15, 0, 24, 0),    // Лихоборы
//     new Date(2024, 3, 15, 1, 14, 0),    // Москва
//     new Date(2024, 3, 15, 6, 52, 0),    // Арзамас-1
//     new Date(2024, 3, 15, 10, 8, 0)     // Саранск-1
// ];

// let realInterval = [0, getRandomInt(5980, 6180), getRandomInt(2720, 2920), getRandomInt(900, 1100), getRandomInt(6660, 6860), getRandomInt(3820, 4020)]
// let date = new Date(2024, 3, 15, 17, 0, 0);

// function way(stops, realInterval, i = 0) {
//     if (i < stops.length) {
//         setTimeout(() => {
//             date.setTime(date.getTime() + realInterval[i]);
//             let arrivalTime = new Date(date.getTime() + realInterval[i]);

//             console.log(`Поезд прибудет на остановку ${stops[i]} в ${arrivalTime.toLocaleTimeString('it-IT')}`);

//             way(stops, realInterval, i + 1);
//         }, realInterval[i]);
//     }
// }

// way(stops, realInterval);
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let stops = ["Санкт-Петербург", "Редкино", "Лихоборы", "Москва", "Арзамас-1", "Саранск-1"];
// let timeOuterInterval = [0, 6080, 680+2140,700+300,240+6520,520+3400];
// let realInterval = [0, getRandomInt(5980,6180),getRandomInt(2720,2920),getRandomInt(900, 1100),getRandomInt(6660, 6860), getRandomInt(3820,4020)]
// let date = new Date(2024, 3, 15, 17, 0, 0);
// let way_label = '';

// function way(stops, realInterval, i = 0) {
//     if (i < stops.length) {
//         setTimeout(() => {
//             let minutes = date.getMinutes() + (realInterval[i] / 20);
//             date.setMinutes(minutes);

//             if (realInterval[i] > (timeOuterInterval[i] + 20)) {
//                 console.log(`Поезд прибыл в ${stops[i]}`, `(${date.toLocaleTimeString('it-IT')})`, `с опозданием`);
//             } else if (realInterval[i] < (timeOuterInterval[i] - 20)) {
//                 console.log(`Поезд прибыл в ${stops[i]}`, `(${date.toLocaleTimeString('it-IT')})`, `раньше по расписанию`);
//             } else {
//                 console.log(`Поезд прибыл в ${stops[i]}`, `(${date.toLocaleTimeString('it-IT')})`, `по расписанию`);
//             }

//             way(stops, realInterval, i + 1);
//         }, realInterval[i]);
//     }
// }

// way(stops, realInterval);
// Временной масштаб симуляции: 1200мс:1ч.
// 20мс:1м
// function simulateTrainSchedule(schedule, timeScale) {
//     schedule.forEach((time, index) => {
//       // Вычисляем случайную задержку от -15 до +15 минут в виртуальном времени
//       const delay = getRandomInt(-15 * timeScale, 15 * timeScale); // в миллисекундах
  
//       // Парсим время из строки в миллисекунды
//       const [hours, minutes, seconds] = time.split(':').map(Number);
//       const timeInMilliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;
  
//       // Вычисляем фактическое время прибытия с учетом временной задержки и масштаба времени
//       const actualTime = timeInMilliseconds + delay;
  
//       // Устанавливаем setTimeout с фактическим временем прибытия
//       setTimeout(() => {
//         console.log(`Поезд прибыл в ${time}`);
//       }, actualTime);
//     });
//   }
  
//   // Исходный массив с расписанием
//   let schedule = ["17:00:30", "17:14:15", "22:03:27", "22:37:32", '00:24:10', '00:59:16', '01:14:15', '01:26:10', "06:52:04", "07:18:30", '10:08:19'];
  
//   // Временной масштаб симуляции: 1200мс:1ч
//   const timeScale = 1200 * 3600; // в миллисекундах
  
//   // Вызываем функцию для эмуляции реального движения поезда с учетом временного масштаба
//   simulateTrainSchedule(schedule, timeScale);
// // Движение поезда и его остановки логировать в консоль (с указанием режима движения) 
// // с выводом временных меток движения. 

// // Финальный результат симуляции вывести на страницу через alert, с результатом общей поездки:
// // по расписанию, с опозданием, поезд пришел заранее, с указанием временных меток.

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let stops = ["Санкт-Петербург", "Редкино", "Лихоборы", "Москва", "Арзамас-1", "Саранск-1"];
// // let schedule = [0, 6060, 680+2140,700+300,240+6520,520+3400];
// let schedule = ["17:00:30", "17:14:15", "22:03:27","22:37:32",'00:24:10','00:59:16', '01:14:15','01:26:10',"06:52:04" , "07:18:30",'10:08:19'];
// let realSchedule = [0, getRandomInt(5960,6160), getRandomInt(2720,2920), getRandomInt(900, 1100), getRandomInt(6660, 6860), getRandomInt(3820,4020)];
// let date = new Date(2024, 3, 15, 17, 0, 1);
// let way_label = '';

// function way(stops, realInterval, i = 0) {
//     if (i < stops.length) {
//         setTimeout(() => {
//             let minutes = date.getMinutes() + (realInterval[i] / 20);
//             date.setMinutes(minutes);
            
//             if (realInterval[i] >= (timeOuterInterval[i] - 30) && realInterval[i] <= (timeOuterInterval[i] + 30)) {
//                 console.log(`Поезд прибыл в ${stops[i]}`, `(${date.toLocaleTimeString('it-IT')})`, `по расписанию`);
//             } else if (realInterval[i] > (timeOuterInterval[i] + 59)) {
//                 console.log(`Поезд прибыл в ${stops[i]}`, `(${date.toLocaleTimeString('it-IT')})`, `с опозданием`);
//             } else {
//                 console.log(`Поезд прибыл в ${stops[i]}`, `(${date.toLocaleTimeString('it-IT')})`, `раньше по расписанию`);
//             }

//             way(stops, realInterval, i + 1);
//         }, realInterval[i]);
//     }
// }
// way(stops, realInterval);
// alert(`Результат - поездка по расписанию, ${way_label}`)
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let stops = ["Санкт-Петербург", "Редкино", "Лихоборы", "Москва", "Арзамас-1", "Саранск-1"];
// let timeOuterInterval = [0, 6060, 680 + 2140, 700 + 300, 240 + 6520, 520 + 3400];

// let realInterval = [0, getRandomInt(5960,6160), getRandomInt(2720,2920), getRandomInt(900, 1100), getRandomInt(6660, 6860), getRandomInt(3820,4020)];
// let date = new Date(2024, 3, 15, 17, 0, 1);
// let way_label = '';

// function way(stops, realInterval, i = 0) {
//     if (i < stops.length) {
//         setTimeout(() => {
//             let minutes = date.getMinutes() + (realInterval[i] / 20);
//             date.setMinutes(minutes);

//             let expectedArrivalTime = new Date(date.getTime() + timeOuterInterval[i]);
//             let actualArrivalTime = new Date(date.getTime() + realInterval[i]);
            
//             if (actualArrivalTime.getTime() <= expectedArrivalTime.getTime() + 20 && actualArrivalTime.getTime() >= expectedArrivalTime.getTime() - 20) {
//                 console.log(`Поезд прибыл в ${stops[i]}`, `(${actualArrivalTime.toLocaleTimeString('it-IT')})`, `по расписанию`);
//             } else if (actualArrivalTime.getTime() > expectedArrivalTime.getTime() + 20) {
//                 console.log(`Поезд прибыл в ${stops[i]}`, `(${actualArrivalTime.toLocaleTimeString('it-IT')})`, `с опозданием`);
//             } else {
//                 console.log(`Поезд прибыл в ${stops[i]}`, `(${actualArrivalTime.toLocaleTimeString('it-IT')})`, `раньше по расписанию`);
//             }

//             way(stops, realInterval, i + 1);
//         }, realInterval[i]);
//     }
// }
// way(stops, realInterval);

// 2) «Черепаший марафон»
// Две черепахи бегут марафон – 40 км. 
// За раз они могут пробежать только 4 часа со скоростью 2км/ч. 
// После этого необходим отдых от 3-5 часов, причем если черепаха спит больше 4 часов, 
// то каждые полные 15 минут добавляют ей возможность дополнительно пробежать 250м
// к следующему отрезку дистанции. 
// Произвести симуляцию забега с логированием всех событий в консоль.
// Результаты забега вывести на страницу через alert.
// Временной масштаб симуляции: 320мс:1ч.


//A, B 
//way = 40 km
//at a go = 4h * 2km\h = 8 km
//if sleep > 4 :
//(sleep * 60 -(60/4))/15 = n
//if n = 4 (5h), 250* 4 = +1000m = +1km

//320мс:1ч
//4h = 1280ms

//Пусть время сна - рандомное число от 3 до 5

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function tortWay() {
//     const maxWay = 40;
//     const speed = 2;
//     const oneStepTime = 4;
//     const oneStep = oneStepTime * speed;

//     let aTort = {
//         way: 0,
//         sleep: 0,
//         extra: 0,
//         time: 0
//     };

//     let bTort = {
//         way: 0,
//         sleep: 0,
//         extra: 0,
//         time: 0
//     };

//     function run() {
//         if (aTort.way < maxWay && bTort.way < maxWay) {

//             aTort.way += oneStep + aTort.extra;
//             aTort.time = (aTort.extra / speed) + oneStepTime;
//             console.log(`Первая черепаха пробежала ${aTort.way} метров`);

//             bTort.way += oneStep + bTort.extra;
//             bTort.time = (bTort.extra / speed) + oneStepTime;
//             console.log(`Вторая черепаха пробежала ${bTort.way} метров`);

//             sleep();
//         } else {д
//             if (aTort.way >= maxWay) console.log("Первая черепаха достигла финиша!");
//             if (bTort.way >= maxWay) console.log("Вторая черепаха достигла финиша!");
//             return;
//         }
//     }

//     function sleep() {
//         aTort.sleep = getRandomInt(3, 5);
//         bTort.sleep = getRandomInt(3, 5);

//         if (aTort.sleep > 4) {
//             aTort.extra = ((Math.floor((aTort.sleep * 60 - 60 / 4) / 15)) * 250) / 1000;
//         } else {
//             aTort.extra = 0;
//         }

//         if (bTort.sleep > 4) {
//             bTort.extra = ((Math.floor((bTort.sleep * 60 - 60 / 4) / 15)) * 250) / 1000;
//         } else {
//             bTort.extra = 0;
//         }

//         setTimeout(run, Math.max(aTort.time * 320, bTort.time * 320));
//     }

//     sleep();
// }

// tortWay();
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

// function tortWay(){
//     const maxWay = 40;
//     const speed = 2;
//     const oneStepTime = 4;
//     const oneStep = oneStepTime * speed;

//     let aTort = {
//         way : 0,
//         sleep : 0,
//         extra : 0,
//         time : 0
//     };

//     let bTort = {
//         way : 0,
//         sleep : 0,
//         extra : 0,
//         time : 0
//     };
    
//     // for (let i = 0; i < 5; i++){
//     setTimeout(run, (aTort.time)*1010);
//     setTimeout(run, (bTort.time)*1010)
    
//     function run(){
//     if (aTort.way < maxWay){
//             aTort.way += oneStep;
//             aTort.way += aTort.extra;
//             aTort.time = (aTort.extra/speed) + oneStepTime;
//             console.log(`Первая черепаха отпозла на ${aTort.way}`)
//         }else{
//             return aTort;
//     }

//     if (bTort.way < maxWay){
//         bTort.way += oneStep;
//         bTort.way += bTort.extra;
//         bTort.time = (bTort.extra/speed) + oneStepTime;
//         console.log(`Вторая черепаха отпозла на ${bTort.way}`)
//     }else{
//         return bTort;
//     }
    
//     sleep();
//     }

//     function sleep(){
//         aTort.sleep = getRandomInt(3, 5);
//         bTort.sleep = getRandomInt(3, 5);

//         if (aTort.sleep > 4){
//         aTort.extra = ((Math.floor((aTort.sleep*60 - 60/4)/15))*250)/1000;
//         }

//         if (bTort.sleep > 4){
//             bTort.extra = ((Math.floor((bTort.sleep*60 - 60/4)/15))*250)/1000;
//             bTort.time = bTort.extra/speed;
//         }
//     }

//     }

// console.log(tortWay())











// //ПЛАНИРОВАНИЕ СОБЫТИЙ
// // console.log(Date.now());


// // const res = setInterval(() => {
// //     date = new Date();
// //     console.log
// //     (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds(): date.getSeconds()}`);
// // }, 1000);

// // clearInterval(res); //остановить таймер
// // date.getDate(), date.getMonth() + 1, date.getFullYear(), 

// // let res = setTimeout(function timer() {
// //     date = new Date();
// //     console.log
// //     (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds(): date.getSeconds()}`);
// //     res = setTimeout(timer,1000)
// // }, 1000);



