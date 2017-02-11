console.log("Hello World");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");
var printStatement = function () {
    console.log("This is a statement from function");
};
printStatement();
var greetWithWeatherFunction = function (name, weather) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
};
greetWithWeatherFunction("John", "nippy");
var demoRestParams = function (name, weather) {
    var extraArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraArgs[_i - 2] = arguments[_i];
    }
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
    for (var i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
};
demoRestParams("Donald", "sunny", "one", "two", "three");
var arrowFuncDemo = function (nameFunction) { return ("Hello " + nameFunction() + "."); };
var printName = function (nameFunction, printFunction) { return printFunction(arrowFuncDemo(nameFunction)); };
printName(function () { return "Raj"; }, console.log);
//let vs var scoping 
var messageFunction = function (name, weather) {
    var message = "Hello, let";
    var vMessage = "Hello, var";
    if (weather == "sunny") {
        var message_1 = "It is a nice day";
        var vMessage = "It is a nice day";
        console.log(message_1);
        console.log(vMessage);
    }
    else {
        var message_2 = "It is " + weather + " today";
        var vMessage = "It is " + weather + " today";
        console.log(message_2);
        console.log(vMessage);
    }
    console.log(message);
    console.log(vMessage);
};
messageFunction("Dheeraj", "raining");
// Closure
//let myGlobalVar = "apples";
var outerFunc = function (name) {
    // name is variable of outer function. 
    var myLocalVar = "sunny";
    var innerFunction = function () {
        return ("Hello " + name + ". Today is " + myLocalVar + ".");
    };
    return innerFunction();
};
console.log(outerFunc("Dheeraj"));
//equality vs Identity operator demo
(function equalityVsIdentityDemo() {
})();
var products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];
var totalValue = products
    .filter(function (item) { return item.stock > 0; })
    .reduce(function (prev, item) { return prev + (item.price * item.stock); }, 0);
console.log("Total value: $" + totalValue.toFixed(2));
