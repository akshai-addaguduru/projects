"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    // now TS treats this file as a module bcz of export
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // ......
    }
    Point.prototype.draw = function () {
        //..logic here
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
exports.Point = Point;
