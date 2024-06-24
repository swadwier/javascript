
// 2) «Черепаший марафон»
// Две черепахи бегут марафон – 40 км.                                   //A, B  //way = 40 km
// За раз они могут пробежать только 4 часа со скоростью 2км/ч.          //at a go = 4h * 2km\h = 8 km
// После этого необходим отдых от 3-5 часов, причем если черепаха спит больше 4 часов, 
// то каждые полные 15 минут добавляют ей возможность дополнительно пробежать 250м 
// к следующему отрезку дистанции. 
//if sleep > 4 :
//(sleep * 60 -(60/4))/15 = n
//if n = 4 (5h), 250* 4 = +1000m = +1km
// Произвести симуляцию забега с логированием всех событий в консоль.
// Результаты забега вывести на страницу через alert.
// Временной масштаб симуляции: 320мс:1ч.     //320мс:1ч //4h = 1280ms

// Пусть время сна - рандомное число от 3 до 5
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tortWay() {
    const maxWay = 40;
    const maxStep = 8;

    let aTort = { way: 0, extra: 0 };
    let bTort = { way: 0, extra: 0 };

    function run(tort) {
        if (tort.way < maxWay) {
            const sleep = getRandomInt(3, 5);
            const stepDistance = Math.min(maxStep, maxWay - tort.way); // Определяем расстояние, которое может пройти черепаха за раз
            tort.way += stepDistance + (sleep > 4 ? ((Math.floor((sleep * 60 - 60 / 4) / 15)) * 250) / 1000 : 0);
            console.log(`${tort === aTort ? 'Первая' : 'Вторая'} черепаха пробежала ${tort.way} м`);
            setTimeout(() => run(tort), sleep * 320);
        } else {
            checkWinner();
        }
    }

    function checkWinner() {
        if (aTort.way >= maxWay && bTort.way >= maxWay) {
            const winner = aTort.way > bTort.way ? 'Первая черепаха' : (aTort.way < bTort.way ? 'Вторая черепаха' : 'Черепахи пришли одновременно');
            alert(winner);
        }
    }

    run(aTort);
    run(bTort);
}

tortWay();
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function tortWay() {
//     const maxWay = 40;
//     const maxStep = 8;
//     let winnerDeclared = false;

//     let aTort = { way: 0, extra: 0 };
//     let bTort = { way: 0, extra: 0 };

//     function run(tort) {
//         if (!winnerDeclared && tort.way >= maxWay) {
//             const winner = aTort.way > bTort.way ? 'Первая черепаха' : (aTort.way < bTort.way ? 'Вторая черепаха' : 'Черепахи пришли одновременно');
//             alert(winner);
//             winnerDeclared = true;
//             return;
//         }

//         if (tort.way < maxWay) {
//             const sleep = getRandomInt(3, 5);
//             const stepDistance = Math.min(maxStep, maxWay - tort.way); // Определяем расстояние, которое может пройти черепаха за раз
//             tort.way += stepDistance + (sleep > 4 ? ((Math.floor((sleep * 60 - 60 / 4) / 15)) * 250) / 1000 : 0);
//             console.log(`${tort === aTort ? 'Первая' : 'Вторая'} черепаха пробежала ${tort.way} км`);
//             setTimeout(() => run(tort), sleep * 320);
//         }
//     }

//     run(aTort);
//     run(bTort);
// }

// tortWay();
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

//     function ARun() {
//         if (aTort.way < maxWay) {
//             aTort.way += oneStep + aTort.extra;
//             aTort.time = (aTort.extra / speed) + oneStepTime;
    
//             console.log(`Первая черепаха пробежала ${aTort.way} м`);
//             ASleep();
//         } else {
//             if (aTort.way < bTort.way && aTort.time < bTort.time){
//                 winner = 'Вторая черепаха';
//             } else if(aTort.way > bTort.way && aTort.time > bTort.time){
//                 winner = 'Первая черепаха';
//             }else{
//                 winner = 'Черепахи пришли одновременно';
//             }
//             console.log(`${winner} достигла финиша`);
//             alert(`${winner} достигла финиша`);
//         }
//     }

//     function BRun() {
//         if (bTort.way < maxWay) {
//             bTort.way += oneStep + bTort.extra;
//             bTort.time = (bTort.extra / speed) + oneStepTime;
           
//             console.log(`Вторая черепаха пробежала ${bTort.way} м`);
//             BSleep();
//         } else {
//             if (aTort.way < bTort.way && aTort.time < bTort.time){
//                 winner = 'Вторая черепаха';
//             } else if(aTort.way > bTort.way && aTort.time > bTort.time){
//                 winner = 'Первая черепаха';
//             }else{
//                 winner = 'Черепахи пришли одновременно';
//             }
//             console.log(`${winner}`);
//             alert(`${winner}`);
//         }
//     }
    
//     function ASleep() {
//         aTort.sleep = getRandomInt(3, 5);    
        
//         if (aTort.sleep > 4) {
//             aTort.extra = ((Math.floor((aTort.sleep * 60 - 60 / 4) / 15)) * 250) / 1000;
//         } else {
//             aTort.extra = 0;
//         }
//         setTimeout(ARun, aTort.sleep * 320); 
//     }

//     function BSleep() {
//         bTort.sleep = getRandomInt(3, 5);

//         if (bTort.sleep > 4) {
//             bTort.extra = ((Math.floor((bTort.sleep * 60 - 60 / 4) / 15)) * 250) / 1000;
//         } else {
//             bTort.extra = 0;
//         }
//         setTimeout(BRun, bTort.sleep * 320); 
//     }

//     setTimeout(ARun, 0);
//     setTimeout(BRun, 0);
// }

// tortWay();
