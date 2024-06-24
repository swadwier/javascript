// 1) Реализовать симуляцию движения поезда.
// Поезд двигается по маршруту от города N до города M. 

// Санкт-Петербург - Саранск
// На пути 4 крупные остановки (количество, длительность, длительность между):
// В время остановок поезда происходит смена локомотива, поэтому следующий участок поезд может проехать в
// любом из 3-х вариантов: 
// с опозданием, с увеличенным скоростным режимом, либо по расписанию.
//     Временной масштаб симуляции: 1200мс:1ч.
//     20мс:1м

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

class Schedule {
    constructor(stops) {
        this.stops = stops;
        this.date = new Date(2024, 3, 15, 17, 0, 0);
        this.realDate = new Date(2024, 3, 15, 17, 0, 0);
        this.minute = 20;
        this.realMinute = 1000 * 60;
        this.i = 0;
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    updateTime() {
        const addToRealWay = (Schedule.getRandomInt(this.stops[this.i].stop - 600, this.stops[this.i].stop + 600) / this.minute) * this.realMinute;
        this.realDate = new Date(+this.realDate + addToRealWay);

        const addFromSchedule = (this.stops[this.i].move / this.minute) * this.realMinute;
        this.date = new Date(+this.date + addFromSchedule);
    }
    
    status() {
        const realTime = this.realDate.getTime();
        const time = this.date.getTime();

        let result;
        if (realTime > time + this.realMinute) {
            result = `Поезд прибыл в ${this.stops[this.i].title} (${this.realDate.toLocaleTimeString("it-IT")}) с опозданием`;
        } else if (realTime < time - this.realMinute) {
            result = `Поезд прибыл в ${this.stops[this.i].title} (${this.realDate.toLocaleTimeString("it-IT")}) раньше расписания`;
        } else {
            result = `Поезд прибыл в ${this.stops[this.i].title} (${this.realDate.toLocaleTimeString("it-IT")}) по расписанию`;
        }

        console.log(result);
    }

    way() {
        if (this.i < this.stops.length) {
            setTimeout(() => {
                this.updateTime();
                this.status();
                this.i++;
                this.way();
            }, this.stops[this.i].move);
        }
    }
}

const stops = [
    {title: "Санкт-Петербург", stop: 280, move: 5780},
    {title: "Редкино", stop: 680, move: 2140},
    {title: "Лихоборы", stop: 700, move: 300},
    {title: "Москва", stop: 240, move: 6520},
    {title: "Арзамас-1", stop: 520, move: 3400},
    {title: "Саранск-1", stop: 600, move: 0}
];

const trainSchedule = new Schedule(stops);
trainSchedule.way();
// class schedule{

//     constructor(stops){
//         this.stops = stops;
//         this.date = new Date(2024, 3, 15, 17, 0, 0);
//         this.realDate = new Date(2024, 3, 15, 17, 0, 0);
//         this.minute = 20;
//         this.real_minute = 1000 * 60;
//         this.i = 0;
//         this.result = '';
//     };

//     static getRandomInt(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     };

//     updateTime() {
//         const addToRealWay = 
//         (schedule.getRandomInt(this.stops[this.i].stop - 600, this.stops[this.i].stop + 600) / this.minute) * this.real_minute;

//         this.realDate = new Date(+this.realDate + addToRealWay);

//         const addFromSchedule = 
//         (this.stops[this.i].move/ this.minute) * this.real_minute;

//         this.date = new Date(+this.date + addFromSchedule);
//     };
    
//     status() {
//         const realTime = this.realDate.getTime();
//         const time = this.date.getTime();
//     };

//     way(realTime,time) {

//         if (this.i < this.stops.length) {
//             setTimeout(() => {
//                 this.updateTime(this.realInterval[this.i]);
//                 this.status(this.i);
//                 this.i++;
//                 this.way();
//             }, this.realInterval[this.i]);
//         }
//         }

//     if (realTime > (time + this.real_minute)) {
//         result = `Поезд прибыл в ${this.stops[this.i]} (${this.realDate.toLocaleTimeString("it-IT")}) с опозданием`;
//     } else if (realTime < time - this.real_minute) {
//         result = `Поезд прибыл в ${this.stops[this.i]} (${this.realDate.toLocaleTimeString("it-IT")}) раньше расписания`;
//     } else {
//         result = `Поезд прибыл в ${this.stops[this.i]} (${this.realDate.toLocaleTimeString("it-IT")}) по расписанию`;
//     }

//     console.log(result);
// };


// // 17:00:00 поезд приезжает в спб
// // 17:14:00 поезд отъезжает
// // r - рандомное колво времени от 0 до 5780 +- 600
// // (17:14 + r) поезд приезжает в Редкино


// const stops = [
//     {title : "Санкт-Петербург", stop : 280 , move : 5780},
//     {title : "Редкино", stop : 680 , move : 2140},
//     {title : "Лихоборы", stop : 700 , move : 300},
//     {title : "Москва", stop : 240 , move : 6520},
//     {title : "Арзамас-1", stop : 520 , move : 3400},
//     {title : "Саранск-1", stop : 600 , move : 0}
// ]


// // const realInterval = [
// //     0,
// //     schedule.getRandomInt(5960, 6160),
// //     schedule.getRandomInt(2720, 2920),
// //     schedule.getRandomInt(900, 1100),
// //     schedule.getRandomInt(6660, 6860),
// //     schedule.getRandomInt(3820, 4020),
// // ];

// const TrainSchedule = new schedule(stops, interval, realInterval);
// TrainSchedule.way();

