// Create one typescript application which contains one class named as Circle.
// Circle class contains two chreacteristics(class data members) as Radius, PI.
// Create one parametersied constructor which accept one value and assign it to Radius. Value Of 
// PI member is set to 3.14
// In Circle class we have to one method (Behaviour) as Area which will return area of Circle.
// After designing the class create two objects of that class by providing some hardcoded Value.
// Call the method Area by using both the objects
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.PI = 3.14;
        this.Radius = radius;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return Circle;
}());
var obj = new Circle(5);
var Ret = 0;
Ret = obj.Area();
console.log("Area of Circle :" + Ret);
