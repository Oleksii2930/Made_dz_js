function Car(model, produser, year, maxSpeed, engineVolum) {
    this.model = model;
    this.produser = produser;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolum = engineVolum;
    this.drive = function(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function(){
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function(speedToAdd){
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    }
    this.changeYear = function(year){
        if (year > 1815) this.year = year;
    }
    this.addDriver = function(driver){
        if (driver) this.driver = driver;
    }
}
const car = new Car('reno','reno',2006, 140, 1.5);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2020);
car.addDriver('Oleksiy');
console.log(car);