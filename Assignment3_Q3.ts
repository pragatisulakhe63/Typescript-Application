class Circle2
{ 

    radius : number;
    PI : number= 3.14;
    result : number;

    constructor (radius: number){ // hya radius madhe child kadun value y
        // kay kru?
        
        console.log("circle2 Radius:"+radius);
        this.radius= radius;
        
    }

     Area():void 
        { 
            this.result = this.PI * this.radius * this.radius ;
           console.log("Area of circle : "+this.result ) 
        }  
 }


 class CircleX11 extends Circle2
 {

    result : number;
    radius : number;
    PI : number= 3.14;
    constructor(radius: number) //ha radius nhi call karat ahes tu 
    // mla nhi kalaly he 
    { 
        super(radius);// ha parent la value passs kartoy
        this.radius= radius; 
    }  
 
    
    Circum():void 
        { 
            this.result = 2* this.PI * this.radius  ;
           console.log("Circum of circle : "+this.result ) 
        } 
 }
 
 // Create object of above class
 var ob = new CircleX11(5);
 ob.Circum();
 ob.Area();