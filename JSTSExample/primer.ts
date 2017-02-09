console.log("Hello World");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

let printStatement = function () {
    console.log("This is a statement from function");
};
printStatement();
let greetWithWeatherFunction = function (name, weather) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
};
greetWithWeatherFunction("John", "nippy");

let demoRestParams = function (name, weather, ...extraArgs) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
    for (let i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
};
demoRestParams("Donald", "sunny", "one", "two", "three");

let arrowFuncDemo = (nameFunction) => ("Hello " + nameFunction() + ".");
let printName = (nameFunction, printFunction) => printFunction(arrowFuncDemo(nameFunction));
printName(function () { return "Raj" }, console.log);

//let vs var scoping 
let messageFunction = function (name, weather) {
    let message = "Hello, let";
    var vMessage = "Hello, var";
    if (weather == "sunny") {
        let message = "It is a nice day";
        var vMessage = "It is a nice day";
        console.log(message);
        console.log(vMessage);
    } else {
        let message = "It is " + weather + " today";
        var vMessage = "It is " + weather + " today";
        console.log(message);
        console.log(vMessage);
    }
    console.log(message);
    console.log(vMessage);
}
messageFunction("Dheeraj", "raining");

// Closure
//let myGlobalVar = "apples";
let outerFunc = function (name) {
    // name is variable of outer function. 
    let myLocalVar = "sunny";
    let innerFunction = function () {
        return ("Hello " + name + ". Today is " + myLocalVar + ".");
    }
    return innerFunction();
};
console.log(outerFunc("Dheeraj"));

//equality vs Identity operator demo
(function equalityVsIdentityDemo() {
    
})();