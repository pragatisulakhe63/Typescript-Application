// Create one typescript application which contains one class named as Arithmetic.
// Arithmetic class contains three chracteristics(Class data members) as Number1, Number2.
// Create one parameterised constructor which accept two values and assign it to Number1 and Number2.
// In Arithmetic class we have to write four methods(Behaviours) as Additon, Substraction, Multiplcation and Division.
// Additon method will add Number1, Number2 & return Result.
// Subtraction method will substract Number1, Number2 & return Result.
// Multiplcation method will multiply Number1, Number2 & return Result.
// Division method will divide Number1, Number2 & return Result.
// After designing the class create two objects of that class by providing some hardcoded value.
// Call all the methods by using both the objects. 
var Arithematic = /** @class */ (function () {
    function Arithematic(X, Y) {
        this.Number1 = X;
        this.Number2 = Y;
    }
    Arithematic.prototype.Addition = function () {
        return this.Number1 + this.Number2;
    };
    Arithematic.prototype.Substraction = function () {
        return this.Number1 - this.Number2;
    };
    Arithematic.prototype.Multiplication = function () {
        return this.Number1 * this.Number2;
    };
    Arithematic.prototype.Division = function () {
        return this.Number1 / this.Number2;
    };
    return Arithematic;
}());
var obj1 = new Arithematic(11, 10);
var Ret = 0;
Ret = obj1.Addition();
console.log("Addition of obj1 : " + Ret);
Ret = obj1.Substraction();
console.log("Substraction of obj1 : " + Ret);
Ret = obj1.Multiplication();
console.log("Multiplication of obj1 :" + Ret);
var obj2 = new Arithematic(21, 15);
Ret = obj1.Division();
console.log("Division of obj1 :" + Ret);
Ret = obj2.Addition();
console.log("Addition of obj2 : " + Ret);
Ret = obj2.Substraction();
console.log("Substraction of obj2 : " + Ret);
Ret = obj2.Multiplication();
console.log("Multiplication of obj2 :" + Ret);
Ret = obj2.Division();
console.log("Division of obj2 :" + Ret);
