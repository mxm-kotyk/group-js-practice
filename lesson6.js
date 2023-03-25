// let i = 0;
// // setTimeout(() => alert(i), 100);
// setTimeout(() => alert(i), 0);

// for (let j = 0; j < 1000000000; j++) {
//   i++;
// }

// =================================================

// const first = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "один");
// });

// const second = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "два");
// });

// Promise.race([first, second]).then((res) => console.log(res));

// =================================================

// setTimeout(() => console.log(1), 0);

// console.log(2);

// new Promise((res) => {
//   console.log(3);
//   res();
// }).then(() => console.log(4));

// console.log(5);

// ================================================

// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

// function greet() {

//   return "hello world";
// }

// const promise = new Promise(resolve => {
//     setTimeout(() => resolve("hello world"), 2000)
// })

// promise.then(resp => console.log(resp))

// ================================================

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

let input = prompt("Введіть значення");

function checkInput(input) {
	input = Number(input);
	return new Promise((resolve, reject) => {
		if (Number.isNaN(input)) {
			reject("Error");
		} else if (input % 2 === 0) {
			setTimeout(() => resolve("even"), 1000);
		} else {
			setTimeout(() => resolve("odd"), 2000);
		}
	});
}
checkInput(input)
	.then(resp => console.log(resp))
	.catch(err => console.log(err));
