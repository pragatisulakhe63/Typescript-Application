/* Write a typescript program which contains one function named as named as DisplayFactors.
That function should accept one number and display factors of that number.
 */
function DisplayFactors(No1) {
    for (var i = 1; i < No1; i++) {
        if (No1 % i == 0) {
            console.log(i);
        }
    }
}
DisplayFactors(20);
