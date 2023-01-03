console.log("Array Sort");

let arr = [2, 1, 7, 5, 5];

console.log("Unsorted: ", arr);
arr.sort((a, b) => (a > b ? 1 : -1));

console.log("Sorted", arr);
