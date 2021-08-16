class Car {
    constructor(name) {
        this.brand = name;
    }
    present(){
        return 'I have a' + this.brand;
    }
}
myCar = new Car("Tasla");
myCar.present();