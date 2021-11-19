// Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды),
// вкл./выкл., расчет времени закипания воды.

const Kettle = function(data){
    let waterLevel = 0;
    let power = false;
    let tempWater = 20;

    this.showInfo = function(){
        console.log(`
            ${data.name}
        Количество воды: ${waterLevel}л.;
        `)
        this.queruStart();
    }

    this.queruStart = function(){
        let status = confirm("Хотите включить чайник?");

        if (status) this.cheakWater();
        else this.sayBy();
    }
    
    this.cheakWater = function(){
        if (waterLevel < 0.2) confirm("Недостаточно воды, добавим?") ? this.addWater() : this.sayBy();
        else this.cheakElectric();
    }
    this.addWater = function(){
        waterLevel = data.volume;
        this.cheakElectric();
    }
    this.cheakElectric= function(){
        if (power) this.onKettle();
        else  confirm("Включите чайник в разетку.") ? this.onElectric() : this.sayBy(); 
    }
    
    this.onElectric = function () {
        power = true;
        this.onKettle();
    }

    this.onKettle = function () {
        alert("Чайник включен");
        this.heatWater();
    }

    this.heatWater = function(){
      let waterHeat = setInterval(() => {
            tempWater+=10;
            console.log(`Температура воды:${tempWater}`)
            if (tempWater >= 100){
                clearInterval(waterHeat);
                this.offKettle();
            }
      }, 700);
    }

    this.offKettle = function (){
        alert("Вода закипела");
        confirm("Наливаем кружку?") ? this.pourWater() : this.sayBy();
    }
    
    this.pourWater = function (){
        waterLevel-=0.2;
        this.sayBy();
    }

    this.sayBy = function () {
        alert("Приходите в следующий раз");
    }
}


let holt  = new Kettle({
    name: "Holt",
    volume:1.7,
});

holt.showInfo();