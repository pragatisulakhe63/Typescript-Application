/* Write a typescript program which contains one function named as ChkPrime. 
That function should accept one number and it should return true if the given number is prime and otherwise return false*/

function ChkPrime (No: number) :void
{
    var No1: number =0;
    for( var i = 2; i <= No; i++)
    {
        if(No % i == 0)
        {
            No1 = 1;
        }
    }
    if (No1 == 1)
    {
        console.log("It is prime number");
    }

    else {
        console.log("It is not prime number")
    }
}

ChkPrime(11);