// if we want to call api when user type on searchbox
// instead of calling api for each letter we can call api
//  if there is some delay in typing, to achieve this we can use debouncing.

let counter = 0;
const getData = () => {
  // calls an api and fetching data
  console.log("fetching..", counter++);
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), delay);
  };
};

const betterFunction = debounce(getData, 300);
