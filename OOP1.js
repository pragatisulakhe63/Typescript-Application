// Class = Data + functions
// Class = Characteristics + Behaviours
var Student = /** @class */ (function () {
    // Behaviours
    function Student(N, M, A, C) {
        console.log("Inside constructor");
        this.Name = N;
        this.Marks = M;
        this.Age = A;
        this.City = C;
    }
    Student.prototype.Display = function () {
        console.log("Name of student :" + this.Name);
        console.log("Name of student :" + this.Marks);
        console.log("Name of student :" + this.Age);
        console.log("Name of student :" + this.City);
    };
    return Student;
}());
var Obj003 = new Student("PragatiAngular", 98, 24, "Pune");
var Obj002 = new Student("PragatiLB", 90, 22, "Jalgaon");
Obj003.Display();
Obj002.Display();
