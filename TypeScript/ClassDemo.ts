export{}
class car{
    //field
    engine:string;

    //constructor
    constructor(engine:string)
    {
        this.engine = engine;
    }

    //function
    disp():void{
        console.log(" Engine is : "+this.engine);
    }

}

var obj = new car("XYSZ12");
//Access the function
obj.disp();

//Access the field
console.log(obj.engine);