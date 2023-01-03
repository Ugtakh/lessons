// let count = 0;

// // var global scope
// while (count <= 10) {
//   let c = 1000;
//   if (count % 2 !== 0) {
//     console.log(count);
//     console.log(c);
//   }
//   count += 1;
// }
//Block scope: var - No
// console.log("Count: ", count);
// console.log("C: ", c);
// Bodlogo-6

//Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич
// let a = parseInt(prompt("Ta дурын тоо оруулна уу ? "));
// let isPrime = true;

// if (a === 2) {
//   console.log(`${a} бол анхны тоо мөн.`);
// } else {
//   let i = 2;
//   while (i < a) {
//     if (a % i === 0) {
//       isPrime = false;
//       break;
//     }
//     i++;
//   }

//   if (isPrime) {
//     console.log(`${a} бол анхны тоо мөн.`);
//   } else {
//     console.log(`${a} бол анхны тоо биш.`);
//   }
// }

let text = prompt("Input");

let len = text.length;
let i = len - 1;
let revText = "";

while (i >= 0) {
  revText = revText + text[i];
  i--;
}

console.log(revText);

let num = parseInt(prompt("Input number"));

let revNum = 0;
let unit = 0;

while (num !== 0) {
  unit = num % 10;
  revNum = revNum * 10 + unit;
  num = Math.floor(num / 10);
}

console.log("Tanii oruulsan too: ", num);
console.log("Tanii oruulsan toonii urvuu ni: ", revNum);
