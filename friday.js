function Person(first, last, age, color) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = color;
    this.fullname = function () {
        return this.firstname + "" + this.lastname;
    }
}
const mySelf = new Person("saad", "saleem", 18, "black");
document.getElementById("demo").innerHTML = "My name is:" + mySelf.fullname();
function Acadmey(name, address, fee, timing) {
    this.name = name;
    this.address = address;
    this.fee = fee;
    this.time = timing;
    this.introduction = function () {
        return this.name + "" + this.address + "" + this.fee + "" + this.time + "" + ".";
    }
}
let saad = new Acadmey("uslearning", "near aleem studio dakh khana bazar", "300$", "24hrs");
document.getElementById("demo1").innerHTML = "The place where i can learn all this: " + saad.introduction() + ".";
function Car(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.details = function () {
        return this.name + " " + this.model + " "  + this.color + " " + ".";
    }
}
let Carlover = new Car("Mini Cooper", "2016", "red");
document.getElementById("demo2").innerHTML = "My fvrt car is:" + Carlover.details() + "."