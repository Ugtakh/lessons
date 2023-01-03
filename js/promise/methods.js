const tasks = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
];

// const arr = [...tasks];
// const [, task] = tasks;
// const { value } = task;
// console.log(value);

// Array forEach method
// arr.forEach((value) => {
//   console.log(`arr:`, value);
// });

// Array map method
// const newArr = tasks.map(({value}) => value * 2);
// console.log(arr);
// console.log(newArr);

// Array filter method
// const filteredArr = arr.filter((value) => value % 2 === 0);
// console.log(filteredArr);

// Array findIndex method
// const index = arr.findIndex((value) => value === 2);
// console.log(index);

// Array reduce method

// const sum = arr.reduce(function (total, value) {
//   return total * value;
// });
// console.log(sum);
const a = 31;

console.log(
  a >= 21
    ? a <= 30
      ? "bag uugaarai"
      : "Husseneeree uu"
    : "nas chine hurehgui bna"
);
const numberBtns = document.querySelectorAll(".number");

console.log(numberBtns);

numberBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log("Clicked", e.target.textContent);
  });
});
