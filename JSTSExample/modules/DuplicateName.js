"use strict";
// demo for two classed with same names in different modules 
var Name = (function () {
    function Name() {
    }
    Object.defineProperty(Name.prototype, "message", {
        get: function () {
            return "Other Name";
        },
        enumerable: true,
        configurable: true
    });
    return Name;
}());
exports.Name = Name;
