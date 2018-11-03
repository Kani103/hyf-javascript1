function apple (a,b,c){
        let sum = a + b + c;
        return sum;
        sum = apple(2,3,4);
        console.log(sum);
}

// step 2.
let b;
function colorCar (b) {
    return 'a ' + b + ' car' ;
}
console.log(colorCar('red'));
console.log(colorCar);

// step 3.
let person = { name: "Kaniwar ", age: 29 };
function info (person) {
    return person.name + person.age;
}
console.log(info(person));

// step 4.

function vehicle (color,code) {
    if (code == 1) {
      return color +  " car";
  }   else {
    return color + " motorbike";
 }
}
console.log(vehicle("a " + "blue", 2));

// step 5.

let number = { age: 3, list: 3 };
console.log (3===3) ? "yes" : "no";

// step 6.
