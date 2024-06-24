class Schedule {
    constructor(stops) {
        this.stops = stops;
        this.date = new Date(2024, 3, 15, 17, 0, 0);
        this.realDate = new Date(2024, 3, 15, 17, 0, 0);
        this.i = 0;
        this.millisecondsPerSimulatedHour = 1200; // Одна симулированная минута = 1200 миллисекунд
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    updateTime() {
        const realMoveTime = Schedule.getRandomInt(this.stops[this.i].stop - 10, this.stops[this.i].stop + 10); // Время в пути со случайными отклонениями
        const scheduledMoveTime = this.stops[this.i].move; // Запланированное время в пути
        const addToRealWay = (realMoveTime / 60) * this.millisecondsPerSimulatedHour; // Время, которое нужно добавить к реальному времени
        const addFromSchedule = (scheduledMoveTime / 3600) * this.millisecondsPerSimulatedHour; // Время, которое нужно добавить к запланированному времени
        this.realDate.setMilliseconds(this.realDate.getMilliseconds() + addToRealWay);
        this.date.setMilliseconds(this.date.getMilliseconds() + addFromSchedule);
    }
    
    status() {
        const realTime = this.realDate.getTime();
        const scheduledTime = this.date.getTime();
        const deviation = 5 * this.millisecondsPerSimulatedHour; // Допустимое отклонение в 5 минут

        let result;
        if (realTime > scheduledTime + deviation) {
            result = `Поезд прибыл в ${this.stops[this.i].title} (${this.realDate.toLocaleTimeString("it-IT")}) с опозданием`;
        } else if (realTime < scheduledTime - deviation) {
            result = `Поезд прибыл в ${this.stops[this.i].title} (${this.realDate.toLocaleTimeString("it-IT")}) раньше расписания`;
        } else {
            result = `Поезд прибыл в ${this.stops[this.i].title} (${this.realDate.toLocaleTimeString("it-IT")}) по расписанию`;
        }

        console.log(result);
    }

    way(callback) {
        if (this.i < this.stops.length) {
            setTimeout(() => {
                this.updateTime();
                this.status();
                this.i++;
                this.way(callback);
            }, this.stops[this.i].move * this.millisecondsPerSimulatedHour);
        } else {
            callback(); // Вызываем обратный вызов, когда все остановки обработаны
        }
    }
}

const stops = [
    {title: "Санкт-Петербург", stop: 280, move: 5780000},
    {title: "Редкино", stop: 680, move: 2140000},
    {title: "Лихоборы", stop: 700, move: 300000},
    {title: "Москва", stop: 240, move: 6520000},
    {title: "Арзамас-1", stop: 520, move: 3400000},
    {title: "Саранск-1", stop: 600, move: 0}
];

const trainSchedule = new Schedule(stops);
trainSchedule.way(() => {
    console.log("Все остановки обработаны"); // Обратный вызов для оповещения об окончании работы
});
