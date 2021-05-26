"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Vehicle = /** @class */ (function () {
    function Vehicle(model, color) {
        this.model = model;
        this.color = color;
    }
    return Vehicle;
}());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car(model, color, price) {
        var _this = _super.call(this, model, color) || this;
        _this.price = price;
        return _this;
    }
    car.prototype.display = function () {
        console.log("Model: " + this.model);
        console.log("Color: " + this.color);
        console.log("Price: " + this.price);
    };
    return car;
}(Vehicle));
var c = new car("Honda", "Red", 1000000);
c.display();
