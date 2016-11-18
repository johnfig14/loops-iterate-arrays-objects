// Looping Assignment
// for loop = a type of JavaScript statement which loops through a block of code a number of times.
// for...in loop = a type of JavaScript statement which loops through the properties of an object.
// for...of loop = a type of JavaScript statement which loops over iterable objects, invoking a custom iteration hook with statements to be executed for the value of each distinct property.

// While Loop Example:
while (true) {
  console.log("Hello, world");
}

//Do...while Loop Example:
var i = 0;
do {
  i += 1;
console.log(i);
} while (i < 5);

//Nested Loops Example:
var ages = [
  [25, 50],
  [30, 60],
  [20, 40]
];

for (var i = 0; i , ages.length; i++) {
  var newAges = [];
    for (var x = 0; x < ages[i].length; x++) {
    newAges.push(ages[i][x]);
    console.log(newAges);
  }
}