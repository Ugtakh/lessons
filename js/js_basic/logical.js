let r1 = 20 > 10;
let r2 = 20 < 10;
let r3 = 20 == 10;
let r4 = 20 != 10;

let x = 10;
let y = "10";

// console.log(r1);
// console.log(r2);
// console.log(r3);
// console.log(r4);

// console.log(x == y);

// let weekNumber = 8;
// let weekName;

// if (weekNumber == 1) {
//   weekName = "Даваа";
// } else if (weekNumber == 2) {
//   weekName = "Мягмар";
// } else if (weekNumber == 3) {
//   weekName = "Лхагва";
// } else if (weekNumber == 4) {
//   weekName = "Пүрэв";
// } else if (weekNumber == 5) {
//   weekName = "Баасан";
// } else if (weekNumber == 6) {
//   weekName = "Бямба";
// } else if (weekNumber == 7) {
//   weekName = "Ням";
// } else {
//   weekName = "Буруу тоо";
// }
// console.log(weekName);

// let gender = "male";
// let age = 16;

// if (gender === "male" && age >= 18) {
//   console.log("Насанд хүрсэн эрэгтэй");
// } else {
//   console.log("Насанд хүрээгүй эсвэл хүйс тохирохгүй байна.");
// }

// let answer;
// let nas = 16;

// // if (nas >= 18) {
// //   answer = "Насанд хүрсэн";
// // } else {
// //   answer = "Насанд хүрээгүй";
// // }

// answer = nas >= 18 ? "Насанд хүрсэн" : "Насанд хүрээгүй";

// console.log(answer);

// // 1. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:

// let a = 100,
//   b = 70,
//   c = 89,
//   d = 69;

// let sum = 0;

// if (a > 80) {
//   sum = sum + a; // sum = sum + a
// }

// if (b > 80) {
//   sum = sum + b;
// }

// if (c > 80) {
//   sum = sum + c;
// }

// if (d > 80) {
//   sum = sum + d;
// }

// console.log("sum = ", sum);

// console.log("===================");
// console.log(4 > 2 && 2 > 1); // true > 1
// console.log(5 + true + "Hi" + 5); // Coersion
// console.log("===================");

// let years = 2002;

// if (years % 400 === 0) {
//   console.log("Mun");
// } else if (years % 100 === 0) {
//   console.log("Bish");
// } else if (years % 4 === 0) {
//   console.log("Mun");
// } else {
//   console.log("Bish");
// }

// let too = 1234;
// let job = "Designer";

// let str1 = "Hello";
// let str2 = "Hello";
// let str3 = `Hello`;

// console.log(str1 + ": " + too);

// console.log("Bat bol " + job + "buguud tsalin ni : " + too);

// console.log(`Bat bol ${job} buguud tsalin ni : ${too}`);
// console.log('"Hi"', "Hi2", "hi");

// const str = "Hello Pinecone";

// console.log(str.charAt(7));

// let str4 = "JavaScript String";

// let n = str4.substring(3, 9);

// console.log(n);

// let str6 = "This is a string";
// console.log(str6.indexOf("iss"));

let nas = "";

// nas = prompt("Та овог нэрээ оруулна уу?"); //
nas = "Ulaaanbaatar Saranbaaatar";

let index = nas.indexOf(" ");
let ovog = nas.substring(index + 1, nas.length);
let ner = nas.substring(0, index);

console.log("Ovog: ", ovog);
console.log("Ner: ", ner);
console.log(nas, index);

let regDugaar = "AR9900990011";

let useg = regDugaar.substring(0, 2);

console.log();

// if (S) {
//   console.log("Uneen");
// } else {
//   console.log("Hud hud");
// }

// console.log("Tanii nas: ", nas);
// console.log("Tanii nas turul ", typeof nas);
// let too = Number(nas);
// console.log("Tanii nas turul ", too + 10);
