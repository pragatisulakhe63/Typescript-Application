/* Write a typescript program which contains one function named as Area.
That Function should calculate area of circle.
Accept value of radius from user and return its area.
Default valure of PI should be 3.14 if it is not provided by the caller. */
function Area(r) {
    var PI = 3.14;
    return (PI * r * r);
}
var r = 0, A;
r = 5;
A = Area(r);
console.log("Area of Circle is :" + A);
