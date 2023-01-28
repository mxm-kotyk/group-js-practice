// 1. Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
//Видаліть перший елемент масива та виведіть його в консоль
// Додайте 'Реп' та 'Реггі' на початок списку.
// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');

// // styles[1] = 'Класика';

//  let idex = styles.indexOf('Блюз');
// // styles[idex] = 'Класика';

// styles.splice(idex, 1, 'Класика');
// console.log(styles.shift());
// styles.unshift('Реп', 'Реггі');
// console.log(styles);

// 2. Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// function logItems(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(["Джаз", "Блюз", "Рок-н-ролл", "Реп", "Реггі"]);


//3. Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//ключ:значення використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`)
// }

//4. Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає массив об'єктів і
//рядок з назвою каміння.
//Функція рахує і повертає загальну вартість каменів
//з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Смарагд", price: 1500, quantity: 3 },
//   { name: "Діамант", price: 2700, quantity: 6 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//   let totalPrice = 0;
//   for (let stone of stones) {
//     console.log(stone);
//     if (stonesName === stone.name) {
//       totalPrice += stone.price * stone.quantity;
//     }
//   }
//   return totalPrice;
// }

// console.log(calcTotalPrice(stones, "Смарагд"));

//6. Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявніст властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат

// Напишіть функцію min(a, b), яка повертає
// меньше з чисел a, b
//Додати перевірку, що функція отримує числа

// function min(a, b){
//     if ( typeof a === "number" || typeof b === "number"  ){
//           return Math.min(a , b) ;
//     }
 


// }
// console.log(min(9, "false"));