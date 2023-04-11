/* Write a typescript program which contains one function named as Maximum. 
That function accepts three parameters and it should returns largest value from three input parameters. */

function Maximum(No1 : number,No2 : number, No3 : number) : void
{
    if(No1 > No2 && No1 > No3)
    {
        console.log("Largest number is :" +No1)
    }
    else if(No2 > No1 && No2 > No3)
    {
        console.log("Largest number is :"+No2)
    }
    else if(No3 > No1 && No3 > No1)
    {
        console.log("Largest number is :"+No3)
    }
}
var X : number = 23 
var Y : number = 89
var Z : number = 6

Maximum(X,Y,Z)

// var x=5;
//     var y=10;
//     var z=15;
//     if(x>y && x>z) console.log("X = "+x+" is the greatest");
//     else if(z>x && z>y) console.log("Z = "+z+" is the greatest");
//     else console.log("Y = "+y+" is the greatest");