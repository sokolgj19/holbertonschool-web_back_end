const _carSymbol = Symbol('car');

export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
        this[_carSymbol] = this.constructor;
    }

    cloneCar() {
        const ClonedClass = this[_carSymbol];
        return new ClonedClass();
    }
}
