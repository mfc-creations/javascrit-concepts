let name1 = {
  firstName: "Fahad",
  lastName: "C",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

name1.printFullName();

let name2 = {
  firstName: "Schin",
  lastName: "Tendulkar",
};

// Function borrowing
name1.printFullName.call(name2);

// Another example
const name3 = {
  firstName: "John",
  lastName: "Doe",
};
let printFullName = function () {
  console.log(this.firstName + " " + this.lastName);
};
printFullName.call(name3);

// if the funcion need custom argument pass along with the object
// let printFullName = function (place,age) {
//     console.log(this.firstName + " " + this.lastName+" "+place+" "+age);
//   };
//   printFullName.call(name3,"Kerala",22);

// Apply method
// In apply method we will pass the arguments as array instead of comma seperated

// Bind method
// It is same as like call
const printMyName = printFullName.bind(name2);
// it will create a copy of printFullName and bind to the object name2 and return a function, so we need to call that again for getting result
console.log(printMyName);
printMyName();

// bind will give u th copy of fn which can invoke later rtherthan directly invoking wherever we write the code (like call method)
