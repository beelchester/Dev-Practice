// JavaScript also has more specialized loops for collections, and we'll mention two of them here.
// map() : to do something to each item in a collection and create a new collection containing the changed items
// example
function toUpper(string) {
    return string.toUpperCase();
  }
  
  const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
  
  const upperCats = cats.map(toUpper);
  
  console.log(upperCats);
//   will give a output of every element inside of an array

// filter() : to test each item in a collection, and create a new collection containing only items that match
// example
function lCat(cat) {
    return cat.startsWith('L');
  }
  
  const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
  
  const filtered = cats.filter(lCat);
  
  console.log(filtered);
  // [ "Leopard", "Lion" ]

// These two requires function

// for loop
// syntax
for (initializer; condition; final-expression) {
    // code to run
  }

// example
for(i=1;i<10;i++){
    console.log(i);
}

// looping through collection example 
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
  console.log(cat);
}
// this will work just like map() function
// looping through collection with for loop instead for...of (same example)

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]); //will print element of particular index(i)
}
// for...of is better in this case
// but in such case stated below for loop is better
// here we want to add and at the end of name of the cats
const cats = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

// for (const cat of cats) {
//   myFavoriteCats = `${myFavoriteCats}${cat}, `
// }
for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {   // We are at the end of the array
      myFavoriteCats = `${myFavoriteCats}and ${cats[i]}.`
    } else {
      myFavoriteCats = `${myFavoriteCats}${cats[i]}, ` }

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
    }


// for exiting a loop use break statement 
// continue; The continue statement works in a similar manner to break, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop.
// example
for (i = 1; i < 10; i++) {
    if (i === 6) { 
        // break;
        continue; 
    }
    console.log(i)
}

// while loop 
// syntax:
initializer
while (condition) {
  // code to run

  final-expression
}
// difference
// This works in a very similar way to the for loop, except that the initializer variable is set before the loop, and the final-expression is included inside the loop after the code to run, rather than these two items being included inside the parentheses.
// example:
i=1;
while(i<10){
    console.log(i);
    i++;
}

// do while loop
// syntax:
initializer
do {
  // code to run

  final-expression
} while (condition)

// The main difference between a do...while loop and a while loop is that the code inside a do...while loop is always executed at least once.
// That's because the condition comes after the code inside the loop.
// example:
i=1;
do{
    console.log(i);
    i++;
}
while(i>10) //output: 1

// while
i=1;
while(i>10){
    console.log(i);
    i++;
} // no output as the code has not been run even once
