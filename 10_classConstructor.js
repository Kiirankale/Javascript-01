console.log("------------------ Class for car----------------");
console.log(" ");
class vehicle{
    // carName
    // ComapanyName
    // mileage
    // fuelType
    // price
    constructor(carName,CompanyName,mileage,fuelType,price){
        this.carName=carName;
        this.CompanyName=CompanyName;
        this.mileage=mileage;
        this.fuelType=fuelType;
        this.price=price;

    }
    show(){
        console.log(`The Car details are :1) Car Name = ${this.carName} 2) Company Name = ${this.ComapanyName} 3) Mileage = ${this.mileage } 4) Fuel Type = ${this.fuelType} 5) Price = ${this.price}`);
    }
}
let car1 = new vehicle("Jaguar"," Land Rover","19km","petrol","80.3 Lakh");
let car2 = new vehicle("Discovery","Range Rover","12km","petrol","50.9 Lakh");
let car3 = new vehicle("Fortuner","Toyota","15km","petrol","43Lakh");
let car4 = new vehicle("Honda City","Honda","15km","petrol","13Lakh");
let array1 = [car1,car2,car3,car4];
for (const element of array1) {
    element.show();
    
}

console.log(" ");
console.log("------------------ Class for collage----------------- ");
console.log(" ");

// Class for collage ..
class collage{
    // carName
    // ComapanyName
    // mileage
    // fuelType
    // price
    constructor(collageName,collageType,department,principalName,phoneNum){
        this.collageName=collageName;
        this.collageType=collageType;
        this.department=department;
        this.principalName=principalName;
        this.phoneNum=phoneNum;

    }
    display(){
        console.log(`The Collage details are :1) Collage Name = ${this.collageName} 2) collage type = ${this.collageType} 3) Department = ${this.department } 4) Principal Name = ${this.principalName} 5) Phone Number = ${this.phoneNum}`);
    }
}

 let collage1 = new collage("Sandford" ,"Engineering","Computer Science","Jonathan Mark","023785");
 let collage2 = new collage("IIT mumbai" ,"Engineering","Electronics","Kiran Kale","023665");
 let collage3 = new collage("MIT new jersy" ,"Engineering","Information Technology","jenefer Lopez","011565");

 collage1.display();
 collage2.display();
 collage3.display();

// function for keys and values .
// console.log(" ");
  function tranverseObject(newObject ){
    console.log(" ");
    for (const key in newObject) {
        console.log(` ${key}= ${newObject[key]}`);
        
        
    }
 }
 tranverseObject(collage1);
 tranverseObject(collage2);
 tranverseObject(collage3);