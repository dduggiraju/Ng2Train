let obj = {
    'name': 'Dheeraj',
    'weather': 'Sunny',
    printIfno: function () {
        console.log("Hello " + obj.name + ".");
        console.log("Today is" + obj.weather + ".");
    }
}
//obj.printIfno();
// Class example
class MyClass {
    name;
    weather;
    constructor(name, weather) {
        this.name = name;
        this.weather = weather;
    }
    printIfno() {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    }
}
let myData = new MyClass("Dheeraj", "Windy");
myData.printIfno();
// get set in Javascript demo
class weatherMesaage {
    constructor(weather) {
        this._weather = weather;
    }

    set weather(value) {
        this._weather = value;
    }

    get weather() {
        return `${this._weather}`;
    }
    printMessage() {
        console.log(this.weather);
    }
}
let wm = new weatherMesaage("Rainy");
wm.printMessage();
// Inheritance in Javascript

class parentClass {
    constructor(name, weather) {
        this.name = name;
        this._weather = weather;
    }
    set weather(value) {
        this._weather = value;
    }
    get weather() {
        return `Today is ${this._weather}`;
    }
    printMessages() {
        console.log("Hello " + this.name + ". ");
        console.log(this.weather);
    }
}

class childClass extends parentClass {
    city;
    constructor(name, weather, city) {
        super(name, weather);
        this.city = city;
    }
    printMessages() {
        super.printMessages();
        console.log(`You are in ${this.city}`);
    }
}
let childObj = new childClass("Dheeraj", "Rainy", "Hyderabad");
childObj.printMessages();