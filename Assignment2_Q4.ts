/* Write a typescript program which contains one arrow function name as ChkArmstrong.
That function accepts one numbers and check whether number is armstrong number or not.*/

function ChkArmstrong  (No : number)
{
      var No1 : number = No;
      var rem : number =0;
      var res : number =0;

      while (No1 > 0) 
      {
        rem = Math.floor(No1) % 10;
        res += rem*rem * rem;
        No1= Math.floor(No1) / 10;
      }

      if (No == res){
          console.log("It is armstrong number");
      }
      else {
          console.log("It is not armstrong number");
      }
}

ChkArmstrong(153);