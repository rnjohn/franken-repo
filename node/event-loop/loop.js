console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');

const intervalId = setInterval(() => {
  console.log('5');
  clearInterval(intervalId);
}, 100);

setTimeout(() => {
  console.log('6');
}, 50);

new Promise((resolve, reject) => {
  console.log('7');
  resolve();
}).then(() => {
  console.log('8');
});

console.log('9');

// this will output 1, 4, 7, 9, 3, 8, 2, 6, 5
// that is because in the console.logs and the body of the promises are evaluated first, afther that the "then" of
// the promises are evaluated in the next tick and after that comes the timers depending on their delay 