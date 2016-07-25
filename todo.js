// # 1. Here is some ruby code
// # class Dog < Animal
// # attr_accessor :name, :breed
// # Def initialize(name, breed)
// #   Self.name = name
// #   Self.breed = breed
// # end
// # End
// #
// # Here are the steps that are happening in the above ruby code
// # 1. We initialize a blank object
// # 2. Set self equal to the blank object
// # 3. Run the code inside the initialize function
// # 4. Return the function
// #
// # • Now write a constructor function in javascript
// #   ○ How do the steps compare to the one's just described
// #   ○ Please write them out
// #
// # 2. Describe prototypical inheritance in javascript
// #   a. What is the difference between an object's constructor and it prototype
// #   b. What happens if I add a new function to a prototype
// #     i. Do existing objects get access to the new method?


function Dog(name, breed){
  this.name = name;
  this.breed = breed;
}

Dog.prototype.bark = function(){
  return "Woof"
}


var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

var Polygon = fuction(){
  this.height = height
  this.width = width
}







class Dog{
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
  }

  bark(){
    return "Woof"
  }
}
