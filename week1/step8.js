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