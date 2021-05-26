var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["green"] = 30] = "green";
    color[color["blue"] = 31] = "blue";
})(color || (color = {}));
console.log(color);
