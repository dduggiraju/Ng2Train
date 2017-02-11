var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var obj = {
    'name': 'Dheeraj',
    'weather': 'Sunny',
    printIfno: function () {
        console.log("Hello " + obj.name + ".");
        console.log("Today is" + obj.weather + ".");
    }
};
//obj.printIfno();
// Class example
var MyClass = (function () {
    function MyClass(name, weather) {
        this.name = name;
        this.weather = weather;
    }
    MyClass.prototype.printIfno = function () {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    };
    return MyClass;
}());
var myData = new MyClass("Dheeraj", "Windy");
myData.printIfno();
// get set in Javascript demo
var weatherMesaage = (function () {
    function weatherMesaage(weather) {
        this._weather = weather;
    }
    Object.defineProperty(weatherMesaage.prototype, "weather", {
        get: function () {
            return "" + this._weather;
        },
        set: function (value) {
            this._weather = value;
        },
        enumerable: true,
        configurable: true
    });
    weatherMesaage.prototype.printMessage = function () {
        console.log(this.weather);
    };
    return weatherMesaage;
}());
var wm = new weatherMesaage("Rainy");
wm.printMessage();
// Inheritance in Javascript
var parentClass = (function () {
    function parentClass(name, weather) {
        this.name = name;
        this._weather = weather;
    }
    Object.defineProperty(parentClass.prototype, "weather", {
        get: function () {
            return "Today is " + this._weather;
        },
        set: function (value) {
            this._weather = value;
        },
        enumerable: true,
        configurable: true
    });
    parentClass.prototype.printMessages = function () {
        console.log("Hello " + this.name + ". ");
        console.log(this.weather);
    };
    return parentClass;
}());
var childClass = (function (_super) {
    __extends(childClass, _super);
    function childClass(name, weather, city) {
        _super.call(this, name, weather);
        this.city = city;
    }
    childClass.prototype.printMessages = function () {
        _super.prototype.printMessages.call(this);
        console.log("You are in " + this.city);
    };
    return childClass;
}(parentClass));
var childObj = new childClass("Dheeraj", "Rainy", "Hyderabad");
childObj.printMessages();
