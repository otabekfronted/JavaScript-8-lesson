"use strict";
// Array 1
// function getLevel2(n) {
//     let two = 2;
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(two ** i);
//     }
//     console.log(result);
// }
// getLevel2(5);

// Array 2
// function generateArray(n, A, B) {
//     let array = [A, B];

//     for (let i = 2; i < n; i++) {
//         let sum = array.reduce((total, num) => total + num, 0);
//         array.push(sum);
//     }

//     return array;
// }

// const n = 5;
// const A = 2;
// const B = 3;

// const result = generateArray(n, A, B);
// console.log(result);

// Array 3
// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(n);
// let d = n.reverse();
// console.log(d);

// Array 4
// function getOddReverse(n) {
//     let sum = 0;
//     let odd = [];
//     for (let i = 0; i <= n.length; i++) {
//         if (n[i] % 2 == 1) {
//             odd.push(n[i]);
//             sum += 1;
//         }
//     }
//     console.log(
//         `Toq sonlar indexlari o'sgan tartibda ${odd} : Toq sonlar soni ${sum}`
//     );
// }
// getOddReverse([4, 5, 7, 8, 6, 9]);

// Array 5
// function getEvenGetOdd(n) {
//     let even = [];
//     let odd = [];
//     for (let i = 0; i <= n.length; i++) {
//         if (n[i] % 2 == 0) {
//             even.push(n[i]);
//         } else if (n[i] % 2 == 1) {
//             odd.push(n[i]);
//         }
//     }
//     console.log(
//         `Juft sonlar indexlar o'sishi = ${even} : toq sonlar teskarisi ${odd.reverse()}`
//     );
// }
// getEvenGetOdd([4, 5, 7, 8, 6, 9]);

// Array 6
// let n = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = [];
// for (let i = 0; i < n.length; i += 2) {
//     result.push(n[i]);
// }
// console.log(result);

// Array 7
// let n = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = [];
// for (let i = 0; i < n.length - 1; i += 2) {
//     result.push(n[n.length - 1 - i]);
// }
// console.log(result);

// Array 8
// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let result = [];
// // let odd = "";
// for (let i = 1; i < n.length; i += 2) {
//     result.push(n[i]);
// }
// for (let i = 0; i < n.length; i += 2) {
//     result.push(n[i]);
// }
// console.log(result);

// Array 9
// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let odd = [];
// let even = [];
// for (let i = 0; i < n.length; i += 2) {
//     odd.push(n[i]);
// }
// for (let i = 1; i < n.length; i += 2) {
//     even.push(n[i]);
// }
// console.log(odd, even.reverse());

// Array 10

// function array(n) {
//     let result = [];
//     let length = n.length;

//     for (let i = 0; i < length / 2; i += 2) {
//         result.push(n[i], n[i + 1], n[length - 1 - i], n[length - 2 - i]);
//     }

//     return result;
// }
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let d = array(a);

// console.log(d);

// Array 11
// function rangeOutSum(arr, k, l) {
//     let first = 0;
//     let sum = 0;
//     for (let i = k; i <= l; i++) {
//         sum += arr[i];
//     }
//     for (let i = 0; i < arr.length; i++) {
//         first += arr[i];
//     }
//     let result = first - sum;
//     console.log(result);
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let k = 2;
// let l = 4;
// rangeOutSum(arr, k, l);

// Array 12
// let input = [10, false, "", -9, "Abdulaziz", null, NaN, 0, -0, undefined, 0n];
// let truthy = [];
// let falsy = [];

// input.forEach((e) => {
//     if (e) {
//         truthy.push(e);
//     } else {
//         falsy.push(e);
//     }
// });
// console.log(truthy);
// console.log(falsy);

// Array 13
// function getEvenMin(arr) {
//     let even = [];
//     arr.forEach((element) => {
//         if (element % 2 == 0) {
//             even.push(element);
//         }
//     });
//     let result = Math.min(...even);
//     console.log(result);
//     console.log(even);
// }
// getEvenMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -12]);

// Array 14
// function getOddMax(arr) {
//     let even = [];
//     arr.forEach((element) => {
//         if (element % 2 == 1) {
//             even.push(element);
//         }
//     });
//     let result = Math.max(...even);
//     console.log(result);
//     console.log(even);
// }
// getOddMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -12, 101]);

// Array 15
// function findLocalMax(arr) {
//     const localMaxima = [];

//     for (let i = 1; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//             localMaxima.push(arr[i]);
//         }
//     }

//     return localMaxima;
// }

// const input = [1, 2, 3, 4, 5, 6, 10, 8, 9, 10, 11, 12];

// const localMaxima = findLocalMax(input);
// console.log("Lokal maksimum elementlar:", localMaxima);
