/* Write application which performs
addition and substraction of 2 numbers.*/
// kay karayache ahe ?  --> Addition & substraction
// Te karayala kay lagnar ahe ? (Data) --> 2 numbers
var Arithmetic = /** @class */ (function () {
    // Behaviours
    function Arithmetic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmetic.prototype.Addition = function () {
        return this.No1 + this.No2;
    };
    Arithmetic.prototype.substraction = function () {
        return this.No1 - this.No2;
    };
    return Arithmetic;
}());
var Obj1 = new Arithmetic(11, 10);
var Obj2 = new Arithmetic(21, 15);
var Ret = 0;
Ret = Obj1.Addition();
console.log("Additon of obj1 :" + Ret);
Ret = Obj1.Addition();
console.log("Additon of obj1 :" + Ret);
Ret = Obj2.substraction();
console.log("Additon of obj1 :" + Ret);
Ret = Obj2.substraction();
console.log("Additon of obj1 :" + Ret);
