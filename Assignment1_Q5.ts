/* Write a typescript which contains one function named as Fibonacci. 
That function accept one number from user and print Fibonacci series till that number. */

function Fibonacci(No : number) :void 
{
   
    var Num:number ; 
    var No1 = 0;
    var No2 = 1;

   for (var i = 0; i < No; i++) {
     console.log(No1);
       var Num = No1 + No2;
       No1 = No2;
       No2 = Num;
       if(No1 > No)
       {
         break;
       }
   }
   
}

Fibonacci(21);