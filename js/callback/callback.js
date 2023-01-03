console.log("Callback");
let name = "";

function greeting(name) {
  alert(`Hello, ${name}`);
}

function greetings(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

// greetings(greeting);
// greeting("Naraa");

function first() {
  console.log("1-р функц ажиллаа.");
}
function second() {
  setTimeout(() => {
    console.log("2-р функц ажиллаа.");
  }, 1000);
}
function third() {
  console.log("3-р функц ажиллаа.");
}
function fourth() {
  console.log("4-р функц ажиллаа.");
}

// first();
// second();
// third();
// fourth();
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filter(numbers, callback) {
  let results = [];
  for (let i = 0; i < numbers.length; i++) {
    if (callback(numbers[i])) {
      results.push(numbers[i]);
    }
  }
  return results;
}
const evens = filter(numbers, (n) => n % 2 === 0); // [2, 4, 6, 8]
const odds = filter(numbers, (n) => n % 2 !== 0); // [1, 3, 5, 7]
const odd = filter(numbers, (n) => {
  return n % 3 === 0;
});

console.log("Evens", evens);
console.log("Odds", odds);
console.log("Odd by 3 ", odd);

function add() {
  return function (a, b) {
    return a + b;
  };
}
const result = add()(4, 5);

console.log(result);
