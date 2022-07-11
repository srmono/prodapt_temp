// function Laptop(brand, ram){
//     this.brand = brand;
//     this.ram = ram;

//     this.getBrand = function(){
//         return this.brand
//     }
// }

// Laptop.prototype.os = "dos";
//Laptop.prototype.getBrand = function(){}

// class Laptop{
//     constructor(brand, ram){
//         this.brand = brand
//         this.ram = ram;
//     }

//     get getBrand(){
//         return this.brand
//     }

//     setBrand(name){
//         this.brand = name
//     }
// }

// let laptop1 = new Laptop("lenovo", "16gb")
// console.log(laptop1.getBrand)


class Product{
    constructor(name, brand){
        this.name = name;
        this.brand = brand;
    }
    getName(){
        return this.name
    }
    getBrand(){
        return this.brand
    }
    getProductDetails(){
        return `The brand is ${this.brand} - name is ${this.name}`
    }
}
class Electronics extends Product {
    constructor(name, brand, ram){
        super(name, brand)
        this.ram =  ram
    }
}
let ele = new Electronics("mobile", "lenovo", "16gb")

console.log(ele.getProductDetails())