// Create an empty object called dog
var dog = {};

// Print the the dog object on the console
console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Big Yellow";
dog.color = "yellow";
dog.age = 3;
dog.bark = function() {
    return "woof woof";
}

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name, dog.color, dog.age)
console.log(dog.bark())

// Set new properties the dog object: breed, getDogInfo
dog.breed = "unknown"
dog.getDogInfo = function() {
    return "name:" + this.name + "\nage:" + this.age + "\nbreed:" + this.breed
}

console.log(dog.getDogInfo())
