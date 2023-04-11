/* Write application which performs 
addition and substraction of 2 numbers.*/

// kay karayache ahe ?  --> Addition & substraction

// Te karayala kay lagnar ahe ? (Data) --> 2 numbers

class Arithmetic1
{
    // Data or Characteristics
    public No1 : number;
    public No2 : number;

    // Behaviours
    public constructor(A: number, B: number)
    {
        this.No1 = A;
        this.No2 = B;
    }

    public Addition(): number
    {
        return this.No1 + this.No2;
    }
    public substraction(): number
    {
        return this.No1 - this.No2;
    }
}

var Obj1 = new Arithmetic1(11,10);
var Obj2 = new Arithmetic1(21,15);

var Ret : number = 0;

Ret = Obj1.Addition();
console.log("Additon of obj1 :"+Ret);

Ret = Obj1.Addition();
console.log("Additon of obj1 :"+Ret);

Ret = Obj2.substraction();
console.log("Additon of obj1 :"+Ret);

Ret = Obj2.substraction();
console.log("Additon of obj1 :"+Ret);