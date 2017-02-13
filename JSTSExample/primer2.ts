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

import { Name, WeatherLocation } from "./modules/NameAndWeather";
import { Name as OtherName } from "./modules/DuplicateName" // demo using alias if two modules have class with same namne
{
    let name = new Name("Dheeraj", "D");
    let location = new WeatherLocation("Cloudy", "Houston");
    let otherName = new OtherName();
    console.log(name.nameMessage);
    console.log(location.weatherMessage);
    console.log(otherName.message);
}
//demo importing all types from a module, in stead of importing individually (alternate ways to import in JS)
import * as NameAndWeatherLocation from "./modules/NameAndWeather";
{
    let name = new NameAndWeatherLocation.Name("Dheeru", "raju");
    let loc = new NameAndWeatherLocation.WeatherLocation("Sunny", "Hyderabad");
    console.log(name.nameMessage);
    console.log(loc.weatherMessage);
}
//demo types importance
import { TempConverter } from "./tempConverter";
{
    // could pass string if no typing was defined which might bouse errors let cTemp = TempConverter.convertFtoC("38");
    let cTemp = TempConverter.convertFtoC(38);
    console.log(`The temp is ${cTemp}C`);
}