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
    
    const minute = 20;
    const real_minute = 1000 * 60;
    
    function way(i = 0) {

    if (i < stops.length) {
    setTimeout(() => {

    let tempDate;
    const realAddition = (realInterval[i] / minute) * real_minute;
    tempDate = +realDate + realAddition;
    realDate = new Date(tempDate);
    
    const addition = (timeOuterInterval[i] / minute) * real_minute;
    tempDate = +date + addition;
    date = new Date(tempDate);
    
    const realTime = realDate.getTime();
    const time = date.getTime();
    
    if (realTime > time + real_minute) {
    console.log(
    `Поезд прибыл в ${stops[i]}`,
    `(${realDate.toLocaleTimeString("it-IT")})`,
    `с опозданием`
    );
    } else if (realTime < time - real_minute) {
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

// Пусть время сна - рандомное число от 3 до 5

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tortWay() {
    const maxWay = 40;
    const speed = 2;
    const oneStepTime = 4;
    const oneStep = oneStepTime * speed;

    let aTort = {
        way: 0,
        sleep: 0,
        extra: 0,
        time: 0
    };

    let bTort = {
        way: 0,
        sleep: 0,
        extra: 0,
        time: 0
    };

    while (aTort.way < 40){
        run();
    }

    function run() {
        if (aTort.way < maxWay && bTort.way < maxWay) {

            aTort.way += oneStep + aTort.extra;
            aTort.time = (aTort.extra / speed) + oneStepTime;
            console.log(`Первая черепаха пробежала ${aTort.way} метров`);

            bTort.way += oneStep + bTort.extra;
            bTort.time = (bTort.extra / speed) + oneStepTime;
            console.log(`Вторая черепаха пробежала ${bTort.way} метров`);

            sleep();
        } else {
            if (aTort.way >= maxWay) console.log("Первая черепаха достигла финиша!");
            if (bTort.way >= maxWay) console.log("Вторая черепаха достигла финиша!");
            return;
        }
    }

    function run() {
        if (aTort.way < maxWay && bTort.way < maxWay) {

            aTort.way += oneStep + aTort.extra;
            aTort.time = (aTort.extra / speed) + oneStepTime;
            console.log(`Первая черепаха пробежала ${aTort.way} метров`);

            bTort.way += oneStep + bTort.extra;
            bTort.time = (bTort.extra / speed) + oneStepTime;
            console.log(`Вторая черепаха пробежала ${bTort.way} метров`);

            sleep();
        } else {
            if (aTort.way >= maxWay) console.log("Первая черепаха достигла финиша!");
            if (bTort.way >= maxWay) console.log("Вторая черепаха достигла финиша!");
            return;
        }
    }
    
    function sleep() {
        aTort.sleep = getRandomInt(3, 5);
        bTort.sleep = getRandomInt(3, 5);

        if (aTort.sleep > 4) {
            aTort.extra = ((Math.floor((aTort.sleep * 60 - 60 / 4) / 15)) * 250) / 1000;
        } else {
            aTort.extra = 0;
        }

        if (bTort.sleep > 4) {
            bTort.extra = ((Math.floor((bTort.sleep * 60 - 60 / 4) / 15)) * 250) / 1000;
        } else {
            bTort.extra = 0;
        }

    }

}

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
