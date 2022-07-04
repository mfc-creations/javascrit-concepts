let name1 = {
  firstName: "Fahad",
  lastName: "C",
};

let printName = function (country, state, age) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      country +
      " " +
      state +
      " " +
      age
  );
};

let printMyName = printName.bind(name1);
printMyName();

// Polyfil used for writing custom bind method
Function.prototype.myBind = function (...arg) {
  let obj = this;
  let params = arg.slice(1);
  return function (...arg2) {
    obj.apply(arg[0], [...params, ...arg2]);
  };
};

let printMyName2 = printName.myBind(name1, "India", "Kerala");
printMyName2("21");
