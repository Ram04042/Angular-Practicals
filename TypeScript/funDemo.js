"use strict";
exports.__esModule = true;
function Message(n) {
    console.log("Hello " + n);
}
Message("Ram");
function greeting() {
    return "Hello World";
}
console.log(greeting());
function display(n) {
    return "Hello " + n;
}
console.log(display("Sunil"));
//Anonymous Fn
var sum = function (x, y) {
    return x + y;
};
console.log(sum(2, 3));
//Arrow Fn
var sum2 = function (x, y) {
    return x + y;
};
console.log(sum2(2, 3));
var display2 = function () { return "Hello"; };
console.log(display2());
//Default Parameters
function Multiply(a, b) {
    if (b === void 0) { b = 10; }
    return a * b;
}
console.log(Multiply(5));
//Optional Parameters
function printdata(id, email) {
    console.log("Id: " + id);
    if (email != undefined)
        console.log("Email: " + email);
}
printdata(1, "Ram");
printdata(2);
