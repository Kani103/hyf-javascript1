//  part 1
// Hello world in English.
console.log("Hello World");
// Hello world in Dutch.
console.log("Halo wereld");
 // Hello world in Kurdish.
console.log("Cîhane Silav ");
// Hello world in Arabic.
console.log("مرحبا بالعالم");
// Hello world in Greek.
console.log("Γειά σου Κόσμε");

// part 2
// console.log('I'm awesome'); get a SyntaxError, the correct way is:
console.log('I\'m awesome');

// part 3

let x;
console.log("the value of my variable x will be : 10");
console.log(x);

 x = 10
console.log("the value of the variable x will be : 10");
console.log(x);

// part 4

let y ;
console.log("the value of my string will be : yes");
console.log(y);
 y = ("why not") ;
console.log("the value of my string will be : why not");
console.log(y);

// part 5

let z = 7.25;
console.log(z);

let a = Math.round(7.25);
console.log(a);

let b = Math.max(z, a);
console.log(b);

// part 6

let myFavoriteAnimals = [];
console.log("the value of my Array will be: undefined ");
console.log(myFavoriteAnimals);

myFavoriteAnimals.push("cheetahs","falcons","horses");
console.log(myFavoriteAnimals);

myFavoriteAnimals.push("baby pig"); 
console.log(myFavoriteAnimals);

// part 7

let myString = "this is a test";
 let l = myString.length;
 console.log('The length of my string is '+ l + ' ');
 
 //part 8
 
 let a = 8;
 console.log("the value of my variable a is : ' + a ");
 let b = "football";
 console.log("the value of my variable b is : ' + b ");
 let c = 7;
 console.log("the value of my variable c is : ' + c");
 let d = "player";
 console.log("the value of my variable d is : ' + d");

 console.log("the type of my variable a is : number");
 console.log("the type of my variable b is : object");
 console.log("the type of my variable c is : number");
 console.log("the type of my variable d is : string");

 console.log(typeof a); // number
 console.log(typeof b); // object
 console.log(typeof c); // number
 console.log(typeof d); // string

 if (a===b) {
     console.log("same type");
 } else {
     console.log("not same");
 } // number and object not the same.
 if (c===d) {
     console.log("same type");
 } else {
     console.log("not same");
 } // number and string not the same.
 if (a===c) {
     console.log("same type");
 } // same type, both are numbers

 // part 9

 let x = 7;
 console.log(x = x % 3);
 console.log("the value of x is : 1");

 let m = 24;
 let n = 5;
 let o = (m % n);
 console.log(o);
 console.log("the value of o is : 4");

 let p = 6;
 let r = 4;
 let s = (p % r);
 console.log(s);
 console.log("the value of s is : 2");

 let d = 40;
 let e = 7;
 let f = (d % e);
 console.log(f);
 console.log("the value of f is : 5");
 