// Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list
// ! creating arrays
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);
//  in an array we can store various data types — strings, numbers, objects, and even other arrays. 
// We can also mix data types in a single array
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ['tree', 795, [0, 1, 2]];
//  !length of array
// .length property
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping.length);  // 5

// !Accessing and modifying array items
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping[0]);
// returns "bread"

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping[0] = 'tahini';
console.log(shopping);
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]

// an array inside an array is called a multidimensional array.

// * to access item inside multidimensional array
const random = ['tree', 795, [0, 4, 2]];
random[2][1];
// gives 4

// !Finding items in an array
// .indexOf()
const birds = ['Parrot', 'Falcon', 'Owl'];
console.log(birds.indexOf('Owl'));   //  2
console.log(birds.indexOf('Rabbit')) // -1
// it returns -1 if the item was not found in the array

// !Adding items
// .push()  adds item at the end
const myArray = ['Manchester', 'Liverpool'];
myArray.push('Cardiff');
console.log(myArray);      // [ "Manchester", "Liverpool", "Cardiff" ]
myArray.push('Bradford', 'Brighton');
console.log(myArray);      // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

const myArray = ['Manchester', 'Liverpool'];
const newLength = myArray.push('Bristol');
console.log(myArray);     // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength);   // 3 // this will give the new length of array after the item is added

// .unshift() will add item in the start of the array
const myArray = ['Manchester', 'Liverpool'];
myArray.unshift('Edinburgh');
console.log(myArray);     // [ "Edinburgh", "Manchester", "Liverpool" ]

// !Removing items
// .pop() to remove last item from array
// it also can store that item in another variable
const myArray = ['Manchester', 'Liverpool'];
const removedItem = myArray.pop();
console.log(myArray);     // [ "Manchester" ]
console.log(removedItem);     // "Liverpool"

// .shift() to remove the first item
const myArray = ['Manchester', 'Liverpool'];
myArray.shift();
console.log(myArray);     // [ "Liverpool" ]

// .splice() If you know the index of an item you want to be removed
const myArray = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = myArray.indexOf('Liverpool');
if (index !== -1) {
  myArray.splice(index, 1);
//  * the first argument says where to start removing items, and the second argument says how many items should be removed
// it starts from the end
// myArray.splice(index, 2);
// }
// console.log(myArray);     // [ "Manchester", "Carlisle" ]
}
console.log(myArray);     // [ "Manchester", "Edinburgh", "Carlisle" ]

// !Accessing every item
// for...of to access every item in the array
const birds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds) {
  console.log(bird);
}

// * .map() if you want to apply a same function to every item in array
function double(number) {
    return number * 2;
  }
  
  const numbers = [5, 2, 7, 6];
  const doubled = numbers.map(double);
  
  console.log(doubled);  // [ 10, 4, 14, 12 ]

// .filter() to create a new array of items from original array only that follows certain condition 
function isLong(city) {
    return city.length > 8;
  }
  
  const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
  const longer = cities.filter(isLong);
  
  console.log(longer);  // [ "Liverpool", "Edinburgh" ]
  
//   !Converting string into array
//   * .split() to seperate the string into items of array 
const myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
const myArray = myData.split(',');
myArray; // returns ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle']

// * .join() converts array into string
const myNewString = myArray.join('+');
myNewString; // returns 'Manchester+London+Liverpool+Birmingham+Leeds+Carlisle'

// .toString() is the alternative it uses comma by default as a parameter
const dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString(); // Rocket,Flash,Bella,Slugger
