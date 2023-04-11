/*Write a typescript program which contains one function named as ChkString. That function accept
one string and check whether that string contains “Marvellous” word or not.
 */

function ChkString(str : string) : void
{
    var name : string = "Pune Kothrud Marvellous Infosystems";
    if (name.indexOf(str) != -1) 
    {
         console.log("String contains Marvellous in it");
    }
    else 
    {
         console.log("String does not contains Marvellous");
    }
}
ChkString("Marvellous");