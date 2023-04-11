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
var Circle2 = /** @class */ (function () {
    function Circle2(radius) {
        // kay kru?
        this.PI = 3.14;
        console.log("circle2 Radius:" + radius);
        this.radius = radius;
    }
    Circle2.prototype.Area = function () {
        this.result = this.PI * this.radius * this.radius;
        console.log("Area of circle : " + this.result);
    };
    return Circle2;
}());
var CircleX11 = /** @class */ (function (_super) {
    __extends(CircleX11, _super);
    function CircleX11(radius) {
        var _this = _super.call(this, radius) || this;
        _this.PI = 3.14;
        _this.radius = radius;
        return _this;
    }
    CircleX11.prototype.Circum = function () {
        this.result = 2 * this.PI * this.radius;
        console.log("Circum of circle : " + this.result);
    };
    return CircleX11;
}(Circle2));
// Create object of above class
var ob = new CircleX11(5);
ob.Circum();
ob.Area();
