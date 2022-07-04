// Transformation of the function of multiple arguments into several functions of a single argument in sequence

// Method 1: using bind
// let multiply = function (x, y) {
//   console.log(x * y);
// };

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(3);

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);

// Method 2: using closure
let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByThree(5);
