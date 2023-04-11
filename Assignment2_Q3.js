/* Write a typescript program which contains one function named as Maximum.
That function accepts array of numbers and returns the second largest number from array. */
function Maximum(No) {
    var temp;
    for (var i = 0; i < No.length; i++) {
        for (var j = i + 1; j < No.length; j++) {
            if (No[i] < No[j]) {
                temp = No[i];
                No[i] = No[j];
                No[j] = temp;
            }
        }
    }
    console.log("Second Largest number is : " + No[1]);
}
Maximum([23, 89, 6, 29, 56, 45, 77, 32]);
