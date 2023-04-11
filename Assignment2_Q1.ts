/* Write a typescript which contains one function named as Maximum. 
That function accepts arrray of numbers and returns the largest number from array. */

function Maximum(No : number[]): void
{
    var Max : number = 0;
    for(var i = 0; i < No.length; i++) 
    { 
        if (No[i] > Max) 
        Max = No[i];
     
    }
    console.log(Max);
    
}
Maximum([23, 89 ,6 ,29, 56, 45, 77, 32]);