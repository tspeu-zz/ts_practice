//porque solo habrá una instancia del modelo no Car
abstract class Car{
    public description : string;
    public model : string;

    constructor(model : string){ 
        this.setModel(model);
    }

    public getDescription(): string {
        return this.description;
    }

    public setModel(modelo) : void{
        this.model = modelo;
    } 

    public getModel(): string{
        return this.model;
    }

//implementacion del método
    public abstract cost() : number;
}

//extiende e implementa las clases abstarctas
class ModelS extends Car {
    public description : string = "Model S";
    public modelo : string ;
    public precio : number;

    public __75_D : string  = " 75D | Batería 75kWh | 490 km";
    public __100_D : string = " 100D | Batería 100kWh | 632 km";
    public __P_100_D : string = " P100D | de 0 a 100 en 2,7 seg. | 613 km";
    public _euro : string = "€";

    public _75_D : number  = 86000;
    public _100_D : number = 109050;
    public _P_100_D : number = 149100;

    public setPrecio(model){    
        switch (model) {

            case "75D" : this.precio = this._75_D;              
            break;

            case "100D" : this.precio = this._100_D;              
            break;
            
            case "P100D" : this.precio = this._P_100_D;              
            break;
            
            default : this.precio= 100000; 
            break;
        }
        return this.precio;
    }
//------------------------
    public cost(): number{
        return this.precio;
    }

//-----------------------
    public getModelDescription(model) : string{
        switch (model) {

            case "75D" : this.modelo = this.__75_D;              
            break;

            case "100D" : this.modelo = this.__100_D;              
            break;
            
            case "P100D" : this.modelo = this.__P_100_D;              
            break;
        }

        return this.modelo;
    }
}

class ModelX extends Car{
    public description : string = "Model X";
    public modelo : string ;
    public precio : number;

    public __75_D : string  = " 75D | Batería 75kWh | 417 km";
    public __100_D : string = " 100D | Batería 100kWh | 565 km";
    public __P_100_D : string = " P100D | de 0 a 100 en 3,1 seg. | 542 km";

    public _75_D : number  = 91550;
    public _100_D : number = 111500;
    public _P_100_D : number = 157450;

    public _euro : string = "€";

    setPrecio(model){

        switch (model) {

            case "75D" : this.precio = this._75_D;              
            break;

            case "100D" : this.precio = this._100_D;              
            break;
            
            case "P100D" : this.precio = this._P_100_D;              
            break;
            
            default : this.precio= 180000; 
            break;
        }
        return this.cost();
    }

    public cost(): number{
        return this.precio;
    }

//-----------------------
    public getModelDescription(model) : string{
        switch (model) {

            case "75D" : this.modelo = this.__75_D;              
            break;

            case "100D" : this.modelo = this.__100_D;              
            break;
            
            case "P100D" : this.modelo = this.__P_100_D;              
            break;
        }

        return this.modelo;
    }

}

//una clase para las opciones //este es el patron decorator ya que 
//extiende de car-> dy agrega mas implementaciones->
abstract class CarOptions extends Car{
    decoratedCar : Car;

    public abstract getDescription() : string;
    public abstract cost(): number; 
}
//crear una opcion real->
class EnhacedAutoPilot extends CarOptions {
    decoratedCar : Car;

    constructor(car : Car){
        super(car.model);
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ' PLUS>: Enhanced AutoPilot';
    }
    public cost(): number {
        return this.decoratedCar.cost() + 5300;
    }
}

//crear una opcion real->
class AutomatedConduction extends CarOptions {
    decoratedCar : Car;
    modelo : string
    constructor(car : Car){
        super(car.model);
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ' PLUS>: Automated Conduction';
    }
    public cost(): number {
        return this.decoratedCar.cost() + 3200;
    }
}

let myTesla = new ModelS("75D");
myTesla.setPrecio(myTesla.getModel());
myTesla.cost();
console.log(myTesla.getDescription() + myTesla.getModelDescription(myTesla.getModel()));
console.log(`Mi TESLA :> ${myTesla.getModel()} PRECIO:  ${myTesla.cost()} ${myTesla._euro} `);
// 
// myTesla = new EnhacedAutoPilot(myTesla);
