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
    }

     changeLocomotive() {
        let mode = Train.locomotiveMode[Math.floor(Math.random() * Train.locomotiveMode.length)];
        let timeToStationAdd = 0;

        if (mode === "old") {
            timeToStationAdd = Train.getRandomInt(40, 1200);

        } else if (mode === "fresh") {
            timeToStationAdd = -Train.getRandomInt(40, 1200);
        }

        // console.log("скоростной режим "+ mode);
        console.log("добавляем времени "+ timeToStationAdd);
        this.sсhedule[this.i].timeToThisStation += timeToStationAdd;
        // console.log("Итого времени времени "+ this.sсhedule[this.i].timeToThisStation);
        return mode;

    }

    changeTime(){
        this.date.setTime(this.date.getTime() + this.sсhedule[this.i].timeToThisStation/1200*60*60000);
        // console.log('после '+ this.i+ ' чейндж тайм, время - '+ `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`)
    }



    stopTime(){
            this.date.setTime(this.date.getTime() + this.sсhedule[this.i].stop/1200*60*60000);
            // console.log('после '+ this.i+ ' стоп тайм, время - '+ `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`)
        }
  
    
    way()
    {
        let modeMove;
        // if (this.i < this.sсhedule.length - 1){
            setTimeout(() => {
                // console.log(`${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`)
                this.changeTime();
                // console.log(this.date.getTime())
                // console.log(this.sсhedule[this.i].timeToThisStation);


                // if (typeof modeMove == 'undefined' || modeMove == 'normal'){
                //     modeMove = 'по расписанию';
                // }

                if (this.date > this.sсhedule[this.i].time){
                    modeMove = 'с опозданием';
                }if (this.date < this.sсhedule[this.i].time){
                    modeMove = 'ускоренный';
                } else {
                    modeMove = 'по расписанию';
                }

                console.log(`Поезд прибыл на станцию ${this.sсhedule[this.i].city}. ` +
                    `По расписанию: ${this.sсhedule[this.i].time.getHours()}:${this.sсhedule[this.i].time.getMinutes()}:${this.sсhedule[this.i].time.getSeconds()}. ` +
                    `По факту: ${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}. ` +
                    `Скоростной режим: ${modeMove}. ` +
                    `Остановка ${this.sсhedule[this.i].stop / 20} минут`);
                
                
    
            // console.log(this.date.getTime())
            // console.log(this.sсhedule[this.i].stop);
            
            // if (this.sсhedule[this.i].stop == 0){
            //     console.log(`Поезд прибыл на конечную станцию ${this.sсhedule[this.i].city} в ${this.date.getHours()} : ${this.date.getMinutes()} : ${this.date.getSeconds()} `);
            // }

            this.stopTime();
            if (this.i < this.sсhedule.length - 1){
                this.i++;   
            // console.log(this.date.getTime())
               modeMove = this.changeLocomotive();
                
            
            // console.log(this.sсhedule[this.i].timeToThisStation)
            // console.log(`${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`)
            
                this.way();
            }
                
            }, this.sсhedule[this.i].timeToThisStation + this.sсhedule[this.i].stop) 
        }
        
    }
// }

let nigga = new Train(sсhedule);
nigga.way();


    // way() {
    //     if (this.i < this.stops.length) {
    //         setTimeout(() => {
    //             this.updateTime();
    //             this.status();
    //             this.i++;
    //             this.way();
    //         }, this.stops[this.i].move);
    //     }
    // }

// const train = new Train({ city: "CityName", stop: "StationName", timeToThisStation: 100 });
// train.changeLokomotiv(Train.locomotiveMode);
// console.log(train.timeToThisStation);