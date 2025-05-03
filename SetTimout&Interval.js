// setTimeOut() = function in Javascript that allows you to execute a function \
// after a certain amount of time has passed
// setTimeout() = takes 2 parameters: a function and a time in milliseconds (callback, delay)

// Example 1
function sayHello() {
  console.log('Hello');
}

setTimeout(sayHello, 2000);

// Example 2
const TimeOutID = setTimeOut(() => window.alert('Hi'), 3000);
// ClearTimeout() = function in Javascript that allows you to cancel a setTimeout() function

// setInterval() = function in Javascript that allows you to execute a function 
// repeatedly after a certain amount of time has passed
function sayGoodbye() {
  console.log('Goodbye');
}
setInterval(sayGoodbye, 2000);

//
const timer = setInterval(() => {
  console.log('Hello again!');
}, 1000);

setTimeout(() => {
  clearInterval(timer);
  console.log('Interval cleared!');
}, 5000); // Clear the interval after 5 seconds