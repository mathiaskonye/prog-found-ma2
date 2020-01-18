// 1 .Create an array called petArray with 3 string items in it: "cat", "cow", "dog".

var petArray = ["cat", "cow", "dog"];

// 2. Console log the value of the second item in petArray.
// Answer: cow

console.log(petArray [1]);

// 3. Add the item "sheep" to petArray using the push method.

console.log(petArray.push("sheep"));

// 4. Console log how many items there are now in petArray using the length method.

console.log(petArray.length);

// 5.Create an object called catObject with 3 properties: name, colour, age.
// Add appropriate values (and type of values) for each of these properties.

var catObject={
    name:"lars",
    colour:"purple",
    age:20
};

// 6. Console log the value of the third property of catObject.

catObject.age;

// 7. Take the value of catObject (the {} part) and place it inside an array called catArray. Ask Teacher

var catArray = [catObject.name, catObject.colour, catObject.age];


// 8. Loop throughcatArray and console log each property of each object inside (there will be only 1 object inside).

for (var i=0; i<catArray.length; i++){
    console.log(catArray[i]);
};

// 9. Create a function logToConsole. The function should accept 1 argument.
// Decide on the name of the argument and console log its value inside the function.

function logToConsole(anotherPet) {
    console.log(anotherPet);
};

// 10. Call the logToConsole function and pass in the value "donkey".

logToConsole("donkey");