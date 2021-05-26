export{}
class Vehicle
{
    model:string;
    color:string;

    constructor(model:string,color:string)
    {
        this.model = model;
        this.color = color;
    }
}

class car extends Vehicle
{
    price:number;

    constructor(model:string,color:string,price:number)
    {
        super(model,color);
        this.price = price;
    }

    display()
    {
        console.log("Model: "+this.model);
        console.log("Color: "+this.color);
        console.log("Price: "+this.price);
    }
}

var c = new car("Honda","Red",1000000);
c.display();