class Turtle {
    constructor(name) {
      this.name = name;
      this.maxWay = 40;
      this.speed = 2;
      this.oneStepTime = 4; // часа может ползти черепаха без отдыха
      this.oneStep = this.oneStepTime * this.speed; // Расстояние за один шаг
      this.way = 0;
      this.sleep = 0;
      this.extra = 0;
      // this.time = 0;
    }
  
    // logEvent(eventType) {
    //   console.log(`${this.name} - ${eventType} - Пройдено: ${this.way.toFixed(2)} метров - Время: ${this.time} часов`);
    // }

    logEvent() {
      console.log(`${this.name} - прошла ${this.way}км`);
    }
  
    run() {

      if (this.way >= this.maxWay) {
        winners.push(this.name);
        checkWinners();
        return;
      }
  
      this.way += this.oneStep + this.extra;
      // this.time += this.oneStepTime + (this.extra / this.speed);
      this.logEvent();
  
      this.sleepTime();
    }
  
    sleepTime() {

      this.sleep = getRandomInt(3, 5); // Время отдыха в часах
  
      if (this.sleep > 4) {
        this.extra = ((Math.floor((this.sleep - 4) *60 / 15)) * 250) / 1000; // Дополнительное расстояние в км
      } else {
        this.extra = 0;
      }
  
      const sleepDuration = this.sleep * 320; // Преобразование времени отдыха в нужную длительность
      setTimeout(() => this.run(), sleepDuration);
    }
  }
  
  
  const winners = [];
  
  function checkWinners() {
    if (winners.length == 2) {
      alert(`Победила ${winners[0]}`);
    }
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function tortWay() {

    const turtle1 = new Turtle('первая черепаха');
    const turtle2 = new Turtle('вторая черепаха');
  
    turtle1.run();
    turtle2.run();
  }
  
  tortWay();
  






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

//     ARun();
//     BRun();

//     while (aTort.way < 40){
//         setTimeout(ARun(), aTort.sleep*320);
//     }

//     while (bTort.way < 40){
//         setTimeout(BRun(), aTort.sleep*320);
//     }


//     function ARun() {
//         if (aTort.way < maxWay) {

//             aTort.way += oneStep + aTort.extra;
//             aTort.time = (aTort.extra / speed) + oneStepTime;
//             console.log(`Первая черепаха пробежала ${aTort.way} метров`);

//             ASleep();
//         } else {
//             if (aTort.way >= maxWay) console.log("Первая черепаха достигла финиша!");
//             return;
//         }
//     }

//     function BRun() {
//         if (bTort.way < maxWay) {

//             bTort.way += oneStep + bTort.extra;
//             bTort.time = (bTort.extra / speed) + oneStepTime;
//             console.log(`Вторая черепаха пробежала ${bTort.way} метров`);

//             BSleep();
//         } else {
//             if (bTort.way >= maxWay) console.log("Вторая черепаха достигла финиша!");
//             return;
//         }
//     }
    
//     function ASleep() {
//         aTort.sleep = getRandomInt(3, 5);    

//         if (aTort.sleep > 4) {
//             aTort.extra = ((Math.floor((aTort.sleep * 60 - 60 / 4) / 15)) * 250) / 1000;
//         } else {
//             aTort.extra = 0;
//         }

//     }

//     function BSleep() {
//         bTort.sleep = getRandomInt(3, 5);

//         if (bTort.sleep > 4) {
//             bTort.extra = ((Math.floor((bTort.sleep * 60 - 60 / 4) / 15)) * 250) / 1000;
//         } else {
//             bTort.extra = 0;
//         }

//     }

// }