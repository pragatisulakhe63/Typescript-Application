// Class = Data + functions
// Class = Characteristics + Behaviours
class Student
{
    // Characteristics
    Name  : string;
    Marks : number;
    Age   : number;
    City  : string;

    // Behaviours
     constructor(N : string, M : number, A : number, C : string)
     {
        console.log("Inside constructor");
        this.Name = N;
        this.Marks = M;
        this.Age = A;
        this.City = C;
     }

     Display() : void
     {
        console.log("Name of student :"+this.Name);
        console.log("Name of student :"+this.Marks);
        console.log("Name of student :"+this.Age);
        console.log("Name of student :"+this.City);
    }
}

var Obj003 = new Student("PragatiAngular",98,24,"Pune");
var Obj002 = new Student("PragatiLB",90,22,"Jalgaon");

Obj003.Display();
Obj002.Display();