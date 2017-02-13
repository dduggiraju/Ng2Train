"use strict";
var TempConverter = (function () {
    function TempConverter() {
    }
    //function call without type checking might return errors if temp is string  //static convertFtoC(temp) { return ((parseFloat(temp.toPrecision(20)) - 32 / 1.8)).toFixed(1); }
    TempConverter.convertFtoCNum = function (temp) {
        return ((parseFloat(temp.toPrecision(20)) - 32) / 1.8).toFixed(1);
    };
    // demo of function that can take a number or a string as input also called as union  type
    /*static convertFtoC(temp: number | string): string { ********/
    // any key word can also be used insted of an union type like above
    TempConverter.convertFtoC = function (temp) {
        var value = temp.toPrecision ? temp : parseFloat(temp);
        return TempConverter.performCalculation(value).toFixed(1);
    };
    TempConverter.performCalculation = function (value) {
        return (parseFloat(value.toPrecision(2)) - 32) / 1.8;
    };
    return TempConverter;
}());
exports.TempConverter = TempConverter;
