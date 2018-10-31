// 1.Strnig :

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString); // log the string.
console.log(myString.length); // string length 42.
myString = "hello this is a difficult to read sentence"; // replaced commas with spaces.
console.log(myString); // log to the string.

// 2.Arrays :

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle'); // add an index to an array.
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, 'meerkat'); // add one index after the first index.
console.log("the new value of the array is : 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ");
console.log(favoriteAnimals);
console.log(favoriteAnimals.length); // expected output is 5.

favoriteAnimals = ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle'];
removed = favoriteAnimals.splice(3, 1); // delete 1 element from index 3.
console.log(favoriteAnimals);

favoriteAnimals = ['blowfish', 'meerkat', 'capricorn', 'turtle'];
let a = favoriteAnimals.indexOf('meerkat');// use indexof to search the position of specified item.
console.log("The item you are looking for is at index : 1");
console.log(a); // The item you are looking for is at index 1.
