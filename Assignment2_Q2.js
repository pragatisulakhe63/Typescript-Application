/* Write a typescript program which contains one function named as a Summation.
That Function accepts Array of numbers and returns the summation of each number from array. */
function Summation(No) {
    var Sum = 0;
    for (var i = 0; i < No.length; i++) {
        Sum = Sum + No[i];
    }
    console.log(Sum);
}
Summation([23, 6, 7, 4, 5, 7]);
