// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
//   }

// rand = -(getRandomInt(40, 1200));
// console.log(rand);
// rand+= rand;
// console.log(rand);

date = new Date(2024, 6, 20, 16, 30, 10);
date2 = new Date();
date2.setTime(date.getTime() + 60*60000);
console.log(date.getHours(), date.getMinutes(), date.getSeconds());
console.log(date2.getHours(), date2.getMinutes(), date2.getSeconds());

// а = число в минутах
// аДельта = а*60000

// в сеттаймауте - используем масштаб
// в чейндж тайме - используем реальное время