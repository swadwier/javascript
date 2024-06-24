let halt = 
[
    {
        nameTrain: 'Moscow',
        travelTime: 120,
        stopTime: 50
    },
    {
        nameTrain: 'Saratov',
        travelTime: 131,
        stopTime: 40
    },
    {
        nameTrain: 'Novosibirsk',
        travelTime: 125, 
        stopTime: 45
    },
    {
        nameTrain: 'Irkutsk',
        travelTime: 140, 
        stopTime: 70
    },
    {
        nameTrain: 'Habarovsk',
        travelTime: 157, 
        stopTime: 20
    }
];

function Train(nameTrain, halt, date) 
{
    this.result = "";
    this.nameTrain = nameTrain;
    this.halt = halt;
    this.date = new Date(...date);
    this.timeTable = new Date(...date);
    this.i = 0;
    this.locomotivTime = 0;
    this.delay;

    this.movementTrain = () => 
    {
        this.delay = (this.i == 0) ? 0 : Math.floor(Math.random() * 6);
    
        this.updateTimeTable();
    
        let station = `${this.nameTrain} arrived at the station ${this.halt[this.i].nameTrain}.
        Time in the schedule: ${this.timeTable.toLocaleTimeString()}.
        Current time: ${this.date.toLocaleTimeString()}.
        The train recovered ${this.definedelay(this.timeTable, this.date)}\n`;
    
        this.result += `${station}`;
        console.log(station);
    
        switch (this.i) {
            case 0:
            case this.halt.length - 1:
                break;
            default:
                setTimeout(this.stopTime, this.halt[this.i].stopTime * 20)
                setTimeout(this.changeLokomotiv, (this.halt[this.i].stopTime + this.locomotivTime) * 20)
                break;
        }
        this.i++;

        if (this.i < this.halt.length) {
            setTimeout(this.movementTrain, (this.halt[this.i].travelTime + this.delay) * 20)
        } else {
            alert(this.result);
        }
    }

    this.stopTime = () => {
        this.timeTable.setMinutes(this.timeTable.getMinutes() + this.halt[this.i].stopTime);
        this.date.setMinutes(this.date.getMinutes() + this.halt[this.i].stopTime);
        console.log(`${this.nameTrain} parking up to ${this.date.toLocaleTimeString()} (${this.halt[this.i].stopTime} minutes.)`)
    }

    this.updateTimeTable = () => {
        this.timeTable.setMinutes(this.timeTable.getMinutes() + this.halt[this.i].travelTime + this.halt[this.i].stopTime);

        this.date.setMinutes(this.date.getMinutes() + this.halt[this.i].travelTime + this.delay + this.locomotivTime + this.halt[this.i].stopTime);
    }

    this.definedelay = (expectation, reality) => {
        let difference = expectation - reality;
        let calculation = Math.abs(difference / (1000 * 60));
        if (difference > 0) {
            res = `came in advance to ${calculation} minutes.`
        } else if (difference == 0) {
            res = "according to the schedule"
        } else {
            res = `late for ${calculation} minutes.`
        }
        return res;
    }

    this.changeLokomotiv = () => {
        this.locomotivTime = (this.i == 0) ? 0 : Math.floor(Math.random() * 6);
        if (this.locomotivTime != 0) {
            console.log(`${this.nameTrain} delayed due to locomotive change: ${this.locomotivTime} minutes.`);
        } else {
            console.log(`${this.nameTrain} it is not delayed due to the change of the locomotive`);
        }
    }

    this.run = () => {
        setTimeout(this.movementTrain, (this.halt[this.i].travelTime + this.delay) * 20 )
    }
}

let obj = new Train("Train 'Saint-Peterburg - Vladivostok'", halt, [2023, 3, 20, 5]);
obj.run() 