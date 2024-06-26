// у нас есть изначальное - идеальное расписание
// количество остановок 5 
// их длительность
// длительность между ними

let sсhedule = [
    {
    city : 'N',
    stop : 200,
    timeToThisStation : 0,
    time: new Date(2024, 6, 20, 17, 0, 0)
    },

    {
    city : 'I',
    stop : 200,
    timeToThisStation : 1200,
    time: new Date(2024, 6, 20,18, 10, 0)

    },

    {
    city : 'G',
    stop : 300,
    timeToThisStation : 2400,
    time: new Date(2024, 6, 20,20, 20, 0)

    },

    {
    city : 'E',
    stop : 600,
    timeToThisStation : 1800,
    time: new Date(2024, 6, 20,22, 5, 0)

    },

    {
    city : 'R',
    stop : 0,
    timeToThisStation : 3600,
    time: new Date(2024, 6, 21, 1, 35, 0)
    },
];



class Train {
    static locomotiveMode = ["old", "normal", "fresh"];

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    constructor(sсhedule){
        this.sсhedule = sсhedule;
        this.i = 0;
        this.date = new Date(2024, 6, 20, 17, 0, 0); 
        this.final = '';
    }

     changeLocomotive() {
        let mode = Train.locomotiveMode[Math.floor(Math.random() * Train.locomotiveMode.length)];//рандомно выбираем какой будет локомотив
        let timeToStationAdd = 0;

        if (mode === "old") {
            timeToStationAdd = Train.getRandomInt(40, 1200);

        } else if (mode === "fresh") {
            timeToStationAdd = -Train.getRandomInt(40, 1200);
        }

        this.sсhedule[this.i].timeToThisStation += timeToStationAdd;
    }

    changeTime(){
        this.date.setTime(this.date.getTime() + this.sсhedule[this.i].timeToThisStation/1200*60*60000);
    }

    stopTime(){
        this.date.setTime(this.date.getTime() + this.sсhedule[this.i].stop/1200*60*60000);
    }

    logArrival() {
        const scheduledTime = this.sсhedule[this.i].time;
        const actualTime = this.date;
        let modeMove;
    
        const formatTime = (date) => date.toLocaleTimeString('ru-RU', { hour12: false });

        if (actualTime > scheduledTime) {
          modeMove = 'с опозданием';
        } else if (actualTime < scheduledTime) {
          modeMove = 'ускоренный';
        } else {
          modeMove = 'по расписанию';
        }

        let ost;
        if (this.sсhedule[this.i].stop == 0){
            ost = 'конечная';
        }else{
            ost = `${this.sсhedule[this.i].stop / 20} минут`;

        }
    
        let  result = (`Поезд прибыл на станцию ${this.sсhedule[this.i].city}. \n` +
                    `По расписанию: ${formatTime(scheduledTime)}.\n` +
                    `По факту: ${formatTime(actualTime)}.\n` +
                    `Скоростной режим: ${modeMove}. \n` +
                    `Остановка `+ ost+ `\n\n`);

        this.final += result;
        console.log(result);
      }
    
      way(modeMove) {
        if (this.i >= this.sсhedule.length) return;
    
        setTimeout(() => {
          this.changeTime();
          this.logArrival();
          this.stopTime();
    
          if (this.i < this.sсhedule.length - 1) {
            this.i++;
            this.changeLocomotive();
            this.way();
          }else {
            if (this.date > this.sсhedule[this.i].time) {
                modeMove = 'с опозданием';
              } else if (this.date < this.sсhedule[this.i].time) {
                modeMove = 'раньше по времени';
              } else {
                modeMove = 'по расписанию';
              }
            this.final += `\n итог поездки ${modeMove} \n`
            alert(this.final);
          }
        }, this.sсhedule[this.i].timeToThisStation + this.sсhedule[this.i].stop);
      }
    }


let nigga = new Train(sсhedule);
nigga.way();