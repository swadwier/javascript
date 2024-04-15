// // 1) Реализовать симуляцию движения поезда.
// // Поезд двигается по маршруту от города N до города M. 

// // Санкт-Петербург - Саранск
// // На пути 4 крупные остановки (количество, длительность, длительность между):
// // В время остановок поезда происходит смена локомотива, поэтому следующий участок поезд может проехать в
// // любом из 3-х вариантов: 
// // с опозданием, с увеличенным скоростным режимом, либо по расписанию.

// // -.Санкт-Петербург (Московский вокзал) 17:14 первая метка - поезд отправился в 17:14:35
// // 4 ч 49 (по расписанию) 5780 мс
// // 1.Редкино* 22:03 34 мин 22:37  680 мс
// // 1 час 47 минут (по расписанию) 2140 мс
// // 2.Лихоборы (техническая)* 00:24 35 мин 00:59 700 мс
// // 15 минут (с увеличенным скоостным режимом) 300 мс
// // 3.Москва (Восточный вокзал) 01:14 12 мин 01:26 240 мс
// // 5 часов 26 минут (по расписанию) 6 520 мс
// // 4.Арзамас-1 06:52 26 мин 07:18 520 мс
// // 2 часа 50 минут (с опозданием) 3400 мс
// // -.Саранск-1 10:08 30 мин 10:38

// // Временной масштаб симуляции: 1200мс:1ч.
// // 20мс:1м

// // Движение поезда и его остановки логировать в консоль (с указанием режима движения) 
// // с выводом временных меток движения. 

// // Финальный результат симуляции вывести на страницу через alert, с результатом общей поездки:
// // по расписанию, с опозданием, поезд пришел заранее, с указанием временных меток.

// // *) вариация: движутся несколько поездов. Alert выводить общий по всем поездам.


// function stations(stations){
//     counter = i++;
//     return stations[counter];
// }

// console.log(`Start station is ${stops[0]}`);
let stops = ["Санкт-Петербург", "Редкино", "Лихоборы", "Москва", "Арзамас-1", "Саранск-1"];
let timeOuterInterval = [0, 5780, 2140, 300, 6520, 3400];
let timeOuterStops = [680, 700, 240, 520, 600, 780];

function way(stops, timeOuterInterval, timeOuterStops, i = 0) {
    if (i < stops.length) {
        setTimeout(() => {
            console.log(`Поезд прибыл в ${stops[i]}`);
            setTimeout(() => {
                console.log(`Остановка: ${timeOuterStops[i]/20} мин`);
                way(stops, timeOuterInterval, timeOuterStops, i += 1);
                
            }, timeOuterStops[i]);
        }, timeOuterInterval[i]);
    }
}

way(stops, timeOuterInterval, timeOuterStops);

// function way(stops, timeOuterInterval, timeOuterStops) {
//     for (let i = 0; i < stops.length; i++) {
//         setTimeout(() => console.log(`Поезд прибыл в ${stops[i]}`), timeOuterInterval[i]);
//     }
//   }

// console.log(way(stops, timeOuterInterval, timeOuterStops));



// function way(){
//     for i
// }

// let nextStation = setTimeout (()=>  console.log(`Поезд прибыл в ${stops[0]}`), 5780);








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



