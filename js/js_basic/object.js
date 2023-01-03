console.log("Object");

let p1 = {
  name: "Naraa",
  phone: 99119911,
  address: {
    duureg: "HUD",
  },

  fullName: function () {
    // console.log(p1.name);
    return this.name;
  },
};

let p2 = {
  name: "Saraa",
  phone: 99998888,
  address: {
    duureg: "SHD",
  },
};

let p3 = p2;

// console.log(p1.name);
// console.log(p2.name);

let arr = [12, 56, 22, 78, 9, 55, 8];

console.log("Orig", arr);
let swapped = false;
do {
  swapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      swapped = true;
    }
  }
} while (swapped);
console.log("Final", arr);
