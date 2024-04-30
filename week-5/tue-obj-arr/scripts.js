/** Object */
let student = {
    firstName: "ValidityState",
    secondName: "FontFaceSetLoadEvent",
    age: 30,
    skill: ["Android", "Kotlin", "HTML", "CSS"],
    hasIntership: false,

    checkInternshipStatus: function () {
        if (this.hasIntership) {
            console.log("You rule!");
        } else {
            console.log("No worries. Keep on going!");
        }
        
    }
}

 

let arr = [12, 22, 32, 42];

for (const property in arr) {
    console.log(`${property}: ${arr[property]}`);
  }

  for (const iterator of arr) {
    console.log(`${iterator}`);
  }


 /**Constructor */
 function StudentConstructor(name, age, hasIntership) {
    this.name = name;
    this.age = age;
    this.hasIntership= hasIntership;

    this.checkInternshipStatus = function(){
        /*if(this.hasInternship){
            return "Congratulations! You rock!";
        } else {
            return "No worries, there is still time. Keep on going!";
        }*/
        return this.hasInternship?"Congratulations! You rock!":"No worries, there is still time. Keep on going!";
    }
 }

 // Class
 class StudentClass {
    constructor(name, age, hasIntership) {
        this.name = name;
        this.age = age;
        this.hasIntership = hasIntership;

        this.checkInternshipStatus = function () {
            /*if(this.hasInternship){
                return "Congratulations! You rock!";
            } else {
                return "No worries, there is still time. Keep on going!";
            }*/
            return this.hasInternship ? "Congratulations! You rock!" : "No worries, there is still time. Keep on going!";
        };
    }
}


const vlad = new StudentConstructor("Vlad",30,"  adasd",false);

const violetta = new StudentClass("Violetta",24,["Testing","HTML","CSS"], true);

console.log(vlad.name);
console.log(vlad.checkInternshipStatus());

console.log(violetta.name);
console.log(violetta.checkInternshipStatus());