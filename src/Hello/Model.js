class Model extends Car{
    constructor(name,mod) {
        super(name);
        this.Model = mod;
    }
    show(){
        return this.present() + 'it is a' + this.Model;
    }
}
myCar = new Model("Toyota","Mustang");
myCar.show();