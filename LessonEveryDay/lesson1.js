// = - присвоение
// == or === сравнение

// Типы данных в программировании
// String
// Number
// List - в js - array
// Dictonary - в js -  object
// Non - в js - null и undefined

// 1) Есть массив чисел, тебе нужно получить сумму всех его элемента
// const arr = [1978756, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < arr.length; i += 1) {
//   sum += arr[i];
// }

// console.log(sum);

// 2) Есть массив чисел, тебе нужно получить количество элементов, равных 11
// Пример:

// const arr1 = [1, 3, 5, 11, 2, 11, 11, 11, 11];

// let count = 0;

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] == 11) {
//     count += 1;
//   }
// }

// console.log(count);

// 3) Есть массив чисел, тебе нужно получить количество элементов, которые делятся на 5

// const arr1 = [1, 3, 5, 11, 2, 11, 11, 11, 11, 55];
// let count = 0;

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] % 5 == 0) {
//     count += 1;
//   }
// }

// console.log(count);

// 4) Есть массив чисел, нужно найти сумму четных чисел этого массива
// const arr1 = [1, 3, 5, 11, 2, 11, 11, 11, 11, 55, 44];
// let sum = 0;

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] % 2 == 0) {
//     sum = sum + arr1[i];
//   }
// }

// console.log(sum);

// 5) Есть массив чисел, нужно найти количество положительных чисел

// const arr1 = [1, 3, 5, 11, 2, 11, 11, 11, 11, 55, 44];

// let count = 0;
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] >= 1) {
//     count += 1;
//   }
// }
// console.log(count);

// 6) Найти максимальный элемент массива
// Пример [1, 3, 5, 11, 2, 11, 11, 11, 11, 55, 44];  вывести 44

// const arr1 = [-10, 6, 100];
// let min = Infinity;

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] < min) {
//     min = arr1[i];
//   }
// }

// console.log(min);

// 7) Найти количество положительный и отрицательных элементов массива по отдельности
// const arr1 = [-21, 3, 5, 11, 2, 11, 11, 11, 11, 55, 44];

// let positiveCount = 0;
// let negativeCount = 0;

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] > 0) {
//     positiveCount += 1;
//   }
//   if (arr1[i] < 0) {
//     negativeCount += 1;
//   }
// }
// console.log(positiveCount, negativeCount);

// 8) Дан массив массивов, найти сумму все элементов вложенного масива
// [[1, 2], [0, 1], [1, 1]] -> 6
// const arr = [
//   [1, 2],
//   [0, 1],
//   [1, 1],
//   [1, 1],
//   [1, 1],
//   [1, 1],
// ];

// let sum = 0;

// for (let i = 0; i < arr.length; i += 1) {
//   const curArr = arr[i];

//   for (let j = 0; j < curArr.length; j += 1) {
//     sum += curArr[j];
//   }
// }

// console.log(sum);
