var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//porque solo habrá una instancia del modelo no Car
var Car = /** @class */ (function () {
    function Car(model) {
        this.setModel(model);
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    Car.prototype.setModel = function (modelo) {
        this.model = modelo;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    return Car;
}());
//extiende e implementa las clases abstarctas
var ModelS = /** @class */ (function (_super) {
    __extends(ModelS, _super);
    function ModelS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model S";
        _this.__75_D = " 75D | Batería 75kWh | 490 km";
        _this.__100_D = " 100D | Batería 100kWh | 632 km";
        _this.__P_100_D = " P100D | de 0 a 100 en 2,7 seg. | 613 km";
        _this._euro = "€";
        _this._75_D = 86000;
        _this._100_D = 109050;
        _this._P_100_D = 149100;
        return _this;
    }
    ModelS.prototype.setPrecio = function (model) {
        switch (model) {
            case "75D":
                this.precio = this._75_D;
                break;
            case "100D":
                this.precio = this._100_D;
                break;
            case "P100D":
                this.precio = this._P_100_D;
                break;
            default:
                this.precio = 100000;
                break;
        }
        return this.precio;
    };
    //------------------------
    ModelS.prototype.cost = function () {
        return this.precio;
    };
    //-----------------------
    ModelS.prototype.getModelDescription = function (model) {
        switch (model) {
            case "75D":
                this.modelo = this.__75_D;
                break;
            case "100D":
                this.modelo = this.__100_D;
                break;
            case "P100D":
                this.modelo = this.__P_100_D;
                break;
        }
        return this.modelo;
    };
    return ModelS;
}(Car));
var ModelX = /** @class */ (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model X";
        _this.__75_D = " 75D | Batería 75kWh | 417 km";
        _this.__100_D = " 100D | Batería 100kWh | 565 km";
        _this.__P_100_D = " P100D | de 0 a 100 en 3,1 seg. | 542 km";
        _this._75_D = 91550;
        _this._100_D = 111500;
        _this._P_100_D = 157450;
        _this._euro = "€";
        return _this;
    }
    ModelX.prototype.setPrecio = function (model) {
        switch (model) {
            case "75D":
                this.precio = this._75_D;
                break;
            case "100D":
                this.precio = this._100_D;
                break;
            case "P100D":
                this.precio = this._P_100_D;
                break;
            default:
                this.precio = 180000;
                break;
        }
        return this.cost();
    };
    ModelX.prototype.cost = function () {
        return this.precio;
    };
    //-----------------------
    ModelX.prototype.getModelDescription = function (model) {
        switch (model) {
            case "75D":
                this.modelo = this.__75_D;
                break;
            case "100D":
                this.modelo = this.__100_D;
                break;
            case "P100D":
                this.modelo = this.__P_100_D;
                break;
        }
        return this.modelo;
    };
    return ModelX;
}(Car));
//una clase para las opciones //este es el patron decorator ya que 
//extiende de car-> dy agrega mas implementaciones->
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(Car));
//crear una opcion real->
var EnhacedAutoPilot = /** @class */ (function (_super) {
    __extends(EnhacedAutoPilot, _super);
    function EnhacedAutoPilot(car) {
        var _this = _super.call(this, car.model) || this;
        _this.decoratedCar = car;
        return _this;
    }
    EnhacedAutoPilot.prototype.getModel = function () {
        return this.decoratedCar.getModel() + " ADD + EnhacedAutoPilot";
    };
    EnhacedAutoPilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ' PLUS>: Enhanced AutoPilot';
    };
    EnhacedAutoPilot.prototype.cost = function () {
        return this.decoratedCar.cost() + 5300;
    };
    return EnhacedAutoPilot;
}(CarOptions));
//crear una opcion real->
var AutomatedConduction = /** @class */ (function (_super) {
    __extends(AutomatedConduction, _super);
    function AutomatedConduction(car) {
        var _this = _super.call(this, car.model) || this;
        _this.decoratedCar = car;
        return _this;
    }
    AutomatedConduction.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ' PLUS>: Automated Conduction';
    };
    AutomatedConduction.prototype.cost = function () {
        return this.decoratedCar.cost() + 3200;
    };
    AutomatedConduction.prototype.getModel = function () {
        return this.decoratedCar.getModel() + " ADD + AutomatedConduction";
    };
    return AutomatedConduction;
}(CarOptions));
var myTesla = new ModelS("75D");
myTesla.setPrecio(myTesla.getModel());
myTesla.cost();
console.log("Mi TESLA :> " + myTesla.getDescription() + "  " + myTesla.getModelDescription(myTesla.getModel()));
console.log("Mi TESLA :> " + myTesla.getModel() + " PRECIO:  " + myTesla.cost() + " " + myTesla._euro + " ");
// 
var carro = new AutomatedConduction(myTesla);
carro.cost();
console.log("MI TESLA ADD: " + carro.getModel() + " | " + carro.getDescription() + " = " + carro.cost() + "  " + myTesla._euro);
