"use strict";
exports.__esModule = true;
var car = /** @class */ (function () {
    //constructor
    function car(engine) {
        this.engine = engine;
    }
    //function
    car.prototype.disp = function () {
        console.log(" Engine is : " + this.engine);
    };
    return car;
}());
var obj = new car("XYSZ12");
obj.disp();
console.log(obj.engine);
