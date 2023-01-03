const arr = [9, 3, 7, 1, 6, 10, 21];

let notFinished = true;

do {
  notFinished = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      notFinished = true;
    }
  }
} while (notFinished);

console.log("Sorted: ", arr);
